import React, { useState } from 'react'

import {
  ProductsListPageFragment,
  useProductsListPageQuery,
  useDeleteProductMutation,
  ProductsListPageDocument,
  useSyncAllProductsCountMutation,
  useSetProductBarcodeMutation,
} from '@/gql/__generated__/types'
import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import UButton from '@/ui-components/UButton'
import { EditFilled, DeleteFilled, ImportOutlined } from '@ant-design/icons'
import UPopconfirm from '@/ui-components/UPopconfirm'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import { Badge, Tooltip } from 'antd'
import UFeaturesList from '@/ui-components/UFeaturesList'
import UWAddProductToProcurementModal from '@/ui-widgets/UWAddProductToProcurementModal'
import productFeaturesToFlatFeature from './helpers/productFeaturesToFlatFeatures'
import BarcodePopover from './components/BarcodePopover'

const columns = ({
  addToProcurement,
  setProductBarcode,
}: {
  addToProcurement: (productId: string) => void
  setProductBarcode: ReturnType<typeof useSetProductBarcodeMutation>[0]
}): ListColumnsType => ({ deleteItem }): IColumn<ProductsListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Линейка продуктов',
    width: 250,
    field: ['productLine', 'name'],
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
    title: 'Slug',
    field: 'slug',
    responsive: ['xl'],
  },
  {
    title: 'Вес (г)',
    field: 'weight',
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
    title: 'Ожидается шт.',
    field: 'waitingCount',
  },
  {
    title: 'Текущая цена',
    field: 'price',
    render: (price) => `${price} ₽`,
  },
  {
    title: 'Категория',
    field: ['productCategory', 'name'],
    render: (name, { productCategoryId }) =>
      name ? (
        <>
          <UButton href={`/product-categories/${productCategoryId}`} type="link" icon={<ImportOutlined />} />
          {name}
        </>
      ) : (
        <Tooltip title="Продукт невидим для клиентов">
          <Badge status="warning" text="БЕЗ КАТЕГОРИИ" />
        </Tooltip>
      ),
  },
  {
    title: 'Особенности',
    field: ['productFeatures'],
    render: (_, { productFeatures }) => (
      <UFeaturesList features={productFeaturesToFlatFeature(productFeatures)} isMini />
    ),
    responsive: ['sm'],
  },
  {
    title: 'Создан',
    field: 'createdAt',
  },
  {
    title: '',
    field: 'id',
    key: 'controls',
    width: 140,
    disableSort: true,
    render: (id) => (
      <>
        <UButton onClick={() => addToProcurement(id)}>+</UButton>
        <UPopconfirm onConfirm={() => deleteItem(id)}>
          <UButton type="link" danger>
            <DeleteFilled />
          </UButton>
        </UPopconfirm>
        <Link to={`/products/${id}/edit`}>
          <EditFilled />
        </Link>
      </>
    ),
  },
]

interface IProductListPageProps {}

const ProductListPage: React.FunctionComponent<IProductListPageProps> = () => {
  const [syncAllProductsCount] = useSyncAllProductsCountMutation({
    refetchQueries: [
      {
        query: ProductsListPageDocument,
      },
    ],
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

  return (
    <>
      <ListPageBuilder<ProductsListPageFragment>
        addItemButton={{
          link: '/products/add',
          name: 'Добавить продукт',
        }}
        extraButtons={[
          <UButton key="sync" onClick={handleSyncCountClick}>
            Синхронизировать количество продуктов
          </UButton>,
        ]}
        columns={columns({
          addToProcurement: switchAddToProcurementModalVisible,
          setProductBarcode,
        })}
        listQuery={{
          hook: useProductsListPageQuery,
          queryName: 'products',
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
            productCategory: undefined,
          },
        }}
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
