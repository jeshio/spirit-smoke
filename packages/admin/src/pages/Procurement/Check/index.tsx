import {
  ProcurementCheckProductsQuery,
  useProcurementCheckProductsQuery,
  useProcurementItemPageQuery,
  useCheckProcurementProductsMutation,
} from '@/gql/__generated__/types'
import getProductName from '@/helpers/getProductName'
import selectIncludeFilter from '@/helpers/selectIncludeFilter'
import useStableQuery from '@/hooks/gql/useStableQuery'
import useBarcodeScanner from '@/hooks/useBarcodeScanner'
import UBlock from '@/ui-components/UBlock'
import UButton from '@/ui-components/UButton'
import UDescriptions from '@/ui-components/UDescriptions'
import UPageContainer from '@/ui-components/UPageContainer'
import UPrice from '@/ui-components/UPrice'
import UTable from '@/ui-components/UTable'
import UWeight from '@/ui-components/UWeight'
import { Card, Modal, notification, Select } from 'antd'
import { keyBy } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import { getColumns } from './constants'
import useCurrentProductsHandlers from './hooks/useCurrentProductsHandlers'
import useTotal from './hooks/useTotal'
import { ICheckPageProps, ICurrentProducts } from './types'

const CheckPage: React.FunctionComponent<ICheckPageProps> = (props) => {
  const { id } = props.match.params
  const [currentProducts, setCurrentProducts] = useState<ICurrentProducts>({})
  const handlers = useCurrentProductsHandlers(currentProducts, setCurrentProducts)
  const [lastScannedBarcode, setLastScannedBarcode] = useState<string>()
  const [tryAgainModalIsVisible, setTryAgainModalIsVisible] = useState(false)
  const [procurementQuery, procurementQueryComponent] = useStableQuery(useProcurementItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка поставки',
    queryName: 'procurement',
  })

  const [updateProcurement, updateProcurementRequest] = useCheckProcurementProductsMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Поставка успешно обновлена!',
        })
        props.history.push(`/procurements/${id}`)
      }
    },
    onError: () => {},
  })

  const handleApplyChangesClick = () => {
    updateProcurement({
      variables: {
        id,
        input: {
          products: Object.keys(currentProducts)
            .filter((productId) => currentProducts[productId].count > 0)
            .map((productId) => {
              const currentProduct = currentProducts[productId]
              return {
                id: productId,
                count: currentProduct.count,
                costs: currentProduct.procurementPrice,
              }
            }),
        },
      },
    })
  }

  const handleBarcodeEnter = (products?: ProcurementCheckProductsQuery['products']) => (barcode?: string) => {
    const product = products?.find((productItem) => productItem.barcode === barcode)

    if (product) {
      handlers.handleCountIncrement(product.id)()
    } else {
      setLastScannedBarcode(barcode)
      setTryAgainModalIsVisible(true)
    }
  }
  const [productsQuery, productsQueryComponent] = useStableQuery(useProcurementCheckProductsQuery, {
    loadingTip: 'Загрузка продуктов',
    queryName: 'products',
    onCompleted: (response) => {
      if (lastScannedBarcode) {
        setTryAgainModalIsVisible(false)
        handleBarcodeEnter(response.products)(lastScannedBarcode)
      }
    },
  })
  const productsById = useMemo(
    () =>
      productsQuery?.data.products.reduce(
        (base, product) => ({
          ...base,
          [product.id]: product,
        }),
        {}
      ) || [],
    [productsQuery]
  )

  const handleBarcodeTryAgainSearch = () => productsQuery?.refetch()

  const handleBarcodeTryAgainCancel = () => {
    setTryAgainModalIsVisible(false)
    setLastScannedBarcode(undefined)
  }

  const procurement = procurementQuery?.data?.procurement

  useBarcodeScanner({
    onEnter: handleBarcodeEnter(productsQuery?.data.products),
  })

  useEffect(() => {
    setCurrentProducts(
      procurement?.productProcurements?.reduce(
        (base, { product, costs }) => ({
          ...base,
          [product.id]: {
            procurementPrice: costs,
            count: 0,
          },
        }),
        {}
      ) || {}
    )
  }, [procurement])

  const productProcurementsByProductId = useMemo(() => keyBy(procurement?.productProcurements, 'product.id') || {}, [
    procurement,
  ])

  const columns = useMemo(
    () =>
      getColumns({
        onCountDecrement: handlers.handleCountDecrement,
        onCountIncrement: handlers.handleCountIncrement,
        onChangePrice: handlers.handleChangePrice,
        productsById,
        productProcurementsByProductId,
      }),
    [handlers, productsById, productProcurementsByProductId]
  )

  const { totalMargin, totalPrice, totalProcurementPrice, totalWeight } = useTotal({
    currentProducts,
    productsById,
  })

  const addProductOptions = useMemo(
    () => productsQuery?.data.products.filter((item) => !currentProducts[item.id]) || [],
    [productsQuery?.data.products, currentProducts]
  )

  if (procurementQueryComponent || !procurement) {
    return procurementQueryComponent as React.ReactElement
  }

  if (productsQueryComponent) {
    return productsQueryComponent
  }

  return (
    <UPageContainer title="Приём поставки">
      {tryAgainModalIsVisible && (
        <Modal
          title="Штрихкод не найден"
          visible={tryAgainModalIsVisible}
          okText="Повторить"
          cancelText="Отмена"
          onOk={handleBarcodeTryAgainSearch}
          onCancel={handleBarcodeTryAgainCancel}
        >
          Создайте новый продукт с этим штрихкодом или добавьте его в существующий продукт (
          <a href="/products/list" target="_blank">
            ссылка на список продуктов
          </a>
          ). После этого нажмите &quot;Повторить&quot;.
        </Modal>
      )}
      <Card>
        <UDescriptions>
          <UDescriptions.Item label="Итоговый вес всех продуктов">
            <UWeight>{totalWeight}</UWeight>
          </UDescriptions.Item>
          <UDescriptions.Item label="Итоговая стоимость всех продуктов на закупке">
            <UPrice>{totalProcurementPrice}</UPrice>
          </UDescriptions.Item>
          <UDescriptions.Item label="Итоговая стоимость продажи всех продуктов">
            <UPrice>{totalPrice}</UPrice> ({totalMargin}%)
          </UDescriptions.Item>
        </UDescriptions>
      </Card>
      <Card>
        <p>Отсканируйте штрихкод продукта или добавьте продукт вручную:</p>
        <Select
          onChange={handlers.handleAddProduct}
          showSearch
          filterOption={selectIncludeFilter}
          placeholder="Выберите продукт для добавления"
          value={null as any}
          style={{
            width: '280px',
          }}
        >
          {addProductOptions.map((item) => (
            <Select.Option value={item.id} key={item.id}>
              {getProductName(item)}
            </Select.Option>
          ))}
        </Select>
      </Card>
      <Card>
        <UTable
          pagination={false}
          dataSource={Object.entries(currentProducts)}
          columns={columns}
          rowKey={(row) => row[0]}
        />
      </Card>
      <Card>
        <UBlock textAlign="right">
          <UButton onClick={handleApplyChangesClick} type="primary" loading={updateProcurementRequest.loading}>
            Сохранить изменения в поставке
          </UButton>

          <UButton href={`/procurements/${procurement.id}`} type="link">
            Вернуться к поставке
          </UButton>
        </UBlock>
      </Card>
    </UPageContainer>
  )
}

export default CheckPage
