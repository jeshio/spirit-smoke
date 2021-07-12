import React, { useEffect, useMemo, useState, useCallback } from 'react'

import {
  ProductsListPageFragment,
  useProductsListPageQuery,
  useDeleteProductMutation,
  ProductsListPageDocument,
  useSyncAllProductsCountMutation,
  useSetProductBarcodeMutation,
  useProductsXlsLazyQuery,
  CompanyMinimumFragment,
} from '@/gql/__generated__/types'
import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import UButton from '@/ui-components/UButton'
import { EditFilled, DeleteFilled, ImportOutlined } from '@ant-design/icons'
import UPopconfirm from '@/ui-components/UPopconfirm'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import { Badge, notification, Tooltip } from 'antd'
import UWAddProductToProcurementModal from '@/ui-widgets/UWAddProductToProcurementModal'
import UWeight from '@/ui-components/UWeight'
import UPrice from '@/ui-components/UPrice'
import downloadBase64 from '@/helpers/downloadBase64'
import ExcelJS from 'exceljs'
import UBlock from '@/ui-components/UBlock'
import { debounce } from 'lodash'
import BarcodePopover from './components/BarcodePopover'
import Filters from './components/Filters'

const columns = ({
  addToProcurement,
  setProductBarcode,
  productCategoriesById,
  productLinesById,
  companiesById,
}: {
  addToProcurement: (productId: string) => void
  setProductBarcode: ReturnType<typeof useSetProductBarcodeMutation>[0]
  productCategoriesById: { [id: string]: ProductsListPageFragment['productCategory'] }
  companiesById: { [id: string]: CompanyMinimumFragment }
  productLinesById: { [id: string]: ProductsListPageFragment['productLine'] }
}): ListColumnsType => ({ deleteItem }): IColumn<ProductsListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Категория',
    field: 'productCategory',
    filters: () =>
      Object.keys(productCategoriesById).map((id) => ({
        value: id,
        text: productCategoriesById[id]?.name,
      })),
    onFilter: (filterValue, product) => {
      const productCategory = product.productCategory || product.productLine?.productCategory
      return productCategory?.id === filterValue
    },
    render: (specificProductCategory, { productLine }) => {
      const productCategory = specificProductCategory || productLine?.productCategory

      if (productCategory) {
        if (specificProductCategory) {
          return (
            <Tooltip title="Задана особая категория для продукта">
              <Badge
                status="warning"
                text={
                  <>
                    <UButton href={`/product-categories/${productCategory.id}`} type="link" icon={<ImportOutlined />} />
                    {productCategory.name}
                  </>
                }
              />
            </Tooltip>
          )
        }

        return (
          <>
            <UButton href={`/product-categories/${productCategory.id}`} type="link" icon={<ImportOutlined />} />
            {productCategory.name}
          </>
        )
      }

      return (
        <Tooltip title="Продукт невидим для клиентов">
          <Badge status="warning" text="БЕЗ КАТЕГОРИИ" />
        </Tooltip>
      )
    },
  },
  {
    title: 'Компания',
    width: 150,
    field: ['productLine', 'company'],
    filters: () =>
      Object.keys(companiesById).map((id) => ({
        value: id,
        text: companiesById[id]?.name,
      })),
    onFilter: (filterValue, product) => product.productLine?.company?.id === filterValue,
    render: (company) =>
      company?.name ? (
        <>
          <UButton href={`/companies/${company.id}`} type="link" icon={<ImportOutlined />} />
          {company.name}
        </>
      ) : (
        <Tooltip title="Продукт невидим для клиентов">
          <Badge status="warning" text="БЕЗ КОМПАНИИ" />
        </Tooltip>
      ),
  },
  {
    title: 'Линейка продуктов',
    width: 150,
    field: ['productLine', 'name'],
    filters: () =>
      Object.keys(productLinesById).map((id) => ({
        value: id,
        text: productLinesById[id]?.name,
      })),
    onFilter: (filterValue, product) => product.productLine?.id === filterValue,
    render: (name, { productLineId }) =>
      name ? (
        <>
          <UButton href={`/product-lines/${productLineId}`} type="link" icon={<ImportOutlined />} />
          {name}
        </>
      ) : (
        <Tooltip title="Продукт невидим для клиентов">
          <Badge status="warning" text="БЕЗ ЛИНЕЙКИ ПРОДУКТОВ" />
        </Tooltip>
      ),
  },
  {
    title: 'Имя',
    field: 'name',
    render: (name, { id }) => <Link to={`/products/${id}`}>{name}</Link>,
  },
  {
    title: 'Вариант исполнения',
    field: 'executionType',
    render: (executionType, { originalProductId }) =>
      executionType && (
        <>
          {originalProductId && (
            <UButton href={`/products/${originalProductId}`} type="link" icon={<ImportOutlined />} />
          )}
          {executionType.note}
        </>
      ),
  },
  // {
  //   title: 'Slug',
  //   field: 'slug',
  //   responsive: ['xl'],
  // },
  {
    title: 'Вес',
    field: 'weight',
    render: (weight, { weightIsSpecial }) =>
      weightIsSpecial ? (
        <Tooltip title="Задана особая цена для продукта">
          <Badge status="warning" text={<UWeight>{weight}</UWeight>} />
        </Tooltip>
      ) : (
        <UWeight>{weight}</UWeight>
      ),
  },
  {
    title: 'Штрихкод',
    field: 'barcode',
    render: (barcode, { id }) => barcode || <BarcodePopover productId={id} setProductBarcode={setProductBarcode} />,
  },
  {
    title: 'Количество',
    field: 'count',
  },
  {
    title: 'Нужно докупить шт.',
    field: 'needToBuyCount',
  },
  {
    title: 'Ожидается шт.',
    field: 'waitingCount',
  },
  {
    title: 'Текущая цена',
    field: 'price',
    render: (price, { priceIsSpecial }) =>
      priceIsSpecial ? (
        <Tooltip title="Задана особая цена для продукта">
          <Badge status="warning" text={<UPrice>{price}</UPrice>} />
        </Tooltip>
      ) : (
        <UPrice>{price}</UPrice>
      ),
  },
  // {
  //   title: 'Особенности',
  //   field: ['productFeatures'],
  //   render: (_, { productFeatures }) => (
  //     <UFeaturesList features={productFeaturesToFlatFeature(productFeatures)} isMini />
  //   ),
  //   responsive: ['sm'],
  // },
  {
    title: 'Себестоимость',
    field: 'primeCost',
    render: (primeCost) => <UPrice>{primeCost}</UPrice>,
  },
  {
    title: ' ',
    field: 'id',
    key: 'controls',
    disableSort: true,
    fixed: 'right',
    width: 80,
    render: (id) => (
      <UBlock textAlign="center">
        <UButton onClick={() => addToProcurement(id)}>+</UButton>
        <Link to={`/products/${id}/edit`}>
          <UButton type="link">
            <EditFilled />
          </UButton>
        </Link>
        <UPopconfirm onConfirm={() => deleteItem(id)}>
          <UButton type="link" danger>
            <DeleteFilled />
          </UButton>
        </UPopconfirm>
      </UBlock>
    ),
  },
]

interface IProductListPageProps {}

const ProductListPage: React.FunctionComponent<IProductListPageProps> = () => {
  const [products, setProducts] = useState<ProductsListPageFragment[]>([])
  const [filters, setFilters] = useState({
    productName: '',
  })
  const handleFiltersChange = useCallback(
    debounce((_filters: typeof filters) => setFilters(_filters), 500),
    [debounce]
  )
  const [filteredIds, setFilteredIds] = useState<string[]>([])
  const [fetchProductsXls] = useProductsXlsLazyQuery({
    onCompleted: async (response) => {
      const workbook = new ExcelJS.Workbook()
      const worksheet = workbook.addWorksheet('Продукты')

      worksheet.addRow([
        'Код',
        'Наименование',
        'Наименование для печати',
        'Компания',
        'Группа',
        'Линейка',
        'Цена',
        'Себестоимость',
        'Вес',
        'В продаже',
        'Остаток',
        'Штрих-код',
        'Ед.изм.',
        'НДС',
      ])

      response.products.forEach((product) => {
        const productLineName = (product.productLine?.name || '').replace(/ \d+ грамм/, '')
        const companyName = product.productLine?.company?.name || ''
        const group = `${companyName} ${productLineName}`.trim()

        const { name } = product

        const pinterName = `${companyName ? `${companyName}, ` : ''}${name} ${
          product.weight ? `${product.weight} гр.` : ''
        }`.trim()

        return worksheet.addRow([
          product.id,
          name,
          pinterName,
          companyName,
          group,
          product.productLine?.name || '',
          product.price,
          product.primeCost,
          product.weight || '',
          'ИСТИНА',
          product.count,
          product.barcode,
          'шт',
          'VAT_20',
        ])
      })

      const buffer = await workbook.xlsx.writeBuffer()

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const productsBase64 = buffer.toString('base64')

      downloadBase64(productsBase64, 'products.xlsx')
    },
  })
  const [syncAllProductsCount] = useSyncAllProductsCountMutation({
    refetchQueries: [
      {
        query: ProductsListPageDocument,
      },
    ],
    onCompleted: () =>
      notification.success({
        message: 'Синхронизация выполнена!',
      }),
  })
  const [setProductBarcode] = useSetProductBarcodeMutation({
    refetchQueries: [
      {
        query: ProductsListPageDocument,
      },
    ],
  })
  const handleSyncCountClick = () => {
    syncAllProductsCount()
  }
  const [addToProcurementModalVisible, setAddToProcurementModalVisible] = useState(false)
  const [addableProductId, setAddableProductId] = useState<string>('')
  const switchAddToProcurementModalVisible = (productId = '') => {
    setAddableProductId(productId)
    setAddToProcurementModalVisible(!addToProcurementModalVisible)
  }
  const handleImportClick = () => {
    fetchProductsXls()
  }
  const productCategoriesById = useMemo(
    () =>
      products.reduce((base, product) => {
        const productCategory = product.productCategory || product.productLine?.productCategory
        return productCategory
          ? {
              ...base,
              [productCategory.id]: productCategory,
            }
          : base
      }, {} as { [id: string]: ProductsListPageFragment['productCategory'] }),
    [products]
  )
  const companiesById = useMemo(
    () =>
      products.reduce(
        (base, product) =>
          product.productLine?.company?.id
            ? {
                ...base,
                [product.productLine.company.id]: product.productLine.company,
              }
            : base,
        {} as { [id: string]: CompanyMinimumFragment }
      ),
    [products]
  )
  const productLinesById = useMemo(
    () =>
      products.reduce(
        (base, product) =>
          product.productLine
            ? {
                ...base,
                [product.productLine.id]: product.productLine,
              }
            : base,
        {} as { [id: string]: ProductsListPageFragment['productLine'] }
      ),
    [products]
  )
  useEffect(() => {
    setFilteredIds(
      products.reduce<string[]>((base, product) => {
        const filterName = filters.productName.toLocaleLowerCase()
        const name = `${product.productLine?.name || ''} ${product.productLine?.company?.name || ''} ${
          product.name
        }`.toLocaleLowerCase()

        if (!name.includes(filterName)) {
          return base
        }

        return [...base, product.id]
      }, [])
    )
  }, [filters, products])

  return (
    <>
      <ListPageBuilder<ProductsListPageFragment>
        addItemButton={{
          link: '/products/add',
          name: 'Добавить продукт',
        }}
        extraButtons={[
          <UButton key="xls" onClick={handleImportClick}>
            Экспорт в Excel
          </UButton>,
          <UButton key="sync" onClick={handleSyncCountClick}>
            Синхронизировать количество продуктов
          </UButton>,
        ]}
        columns={columns({
          addToProcurement: switchAddToProcurementModalVisible,
          setProductBarcode,
          productCategoriesById,
          companiesById,
          productLinesById,
        })}
        listQuery={{
          hook: useProductsListPageQuery,
          queryName: 'products',
          hookOptions: {
            onCompleted: (response) => {
              const { products: responseList } = response
              setProducts(responseList)
            },
          },
        }}
        loadingTip="Загрузка продуктов"
        title="Список продуктов"
        deleteItemMutation={{
          hook: useDeleteProductMutation,
          deleteName: 'deleteProduct',
          listQueryDocument: ProductsListPageDocument,
          queryName: 'products',
          successMessage: 'Продукт удален.',
        }}
        tableProps={{
          invalidRowCondition: {
            productLine: undefined,
          },
        }}
        filtersBar={<Filters onFiltersChange={handleFiltersChange} />}
        filteredIds={filteredIds}
      />

      <UWAddProductToProcurementModal
        visible={addToProcurementModalVisible}
        onClose={switchAddToProcurementModalVisible}
        productId={addableProductId}
      />
    </>
  )
}

export default ProductListPage
