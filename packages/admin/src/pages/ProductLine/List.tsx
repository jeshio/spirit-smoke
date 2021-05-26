import * as React from 'react'

import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import UButton from '@/ui-components/UButton'
import { EditFilled, DeleteFilled, ImportOutlined } from '@ant-design/icons'
import UPopconfirm from '@/ui-components/UPopconfirm'
import {
  ProductLineListPageFragment,
  useProductLineListPageQuery,
  useDeleteProductLineMutation,
  ProductLineListPageDocument,
} from '@/gql/__generated__/types'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import UPrice from '@/ui-components/UPrice'
import UWeight from '@/ui-components/UWeight'
import { Badge, Tooltip } from 'antd'

const columns: ListColumnsType = ({ deleteItem }): IColumn<ProductLineListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Компания',
    field: ['company', 'name'],
    render: (name, { companyId }) =>
      name ? (
        <>
          <UButton href={`/companies/${companyId || ''}`} type="link" icon={<ImportOutlined />} />
          {name}
        </>
      ) : (
        <Tooltip title="Линейка невидима для клиентов">
          <Badge status="error" text="БЕЗ КОМПАНИИ" />
        </Tooltip>
      ),
  },
  {
    title: 'Имя',
    field: 'name',
    render: (name, { id }) => <Link to={`/product-lines/${id}`}>{name}</Link>,
  },
  {
    title: 'Категория',
    field: ['productCategory', 'name'],
    render: (name, { productCategoryId }) =>
      name ? (
        <>
          <UButton href={`/product-categories/${productCategoryId || ''}`} type="link" icon={<ImportOutlined />} />
          {name}
        </>
      ) : (
        <Tooltip title="Линейка невидима для клиентов">
          <Badge status="error" text="БЕЗ КАТЕГОРИИ" />
        </Tooltip>
      ),
  },
  {
    title: 'Текущая цена',
    field: 'price',
    render: (price) => <UPrice>{price}</UPrice>,
  },
  {
    title: 'Вес',
    field: 'weight',
    render: (weight) => <UWeight>{weight}</UWeight>,
  },
  {
    title: 'Варианты исполнения',
    field: 'executionTypes',
    render: (executionTypes) => <>{executionTypes.map(({ note }) => note).join(', ')}</>,
    width: 100,
  },
  {
    title: '',
    field: 'id',
    key: 'controls',
    width: 100,
    disableSort: true,
    render: (id) => (
      <>
        <UPopconfirm
          onConfirm={() => deleteItem(id)}
          title="Все продукты линейки станут недоступны для клиентов. Вы уверены?"
          placement="topRight"
        >
          <UButton type="link" danger>
            <DeleteFilled />
          </UButton>
        </UPopconfirm>
        <Link to={`/product-lines/${id}/edit`}>
          <EditFilled />
        </Link>
      </>
    ),
  },
]

interface IProductLineListPageProps {}

const ProductLineListPage: React.FunctionComponent<IProductLineListPageProps> = () => {
  return (
    <ListPageBuilder
      addItemButton={{
        link: '/product-lines/add',
        name: 'Добавить линейку',
      }}
      columns={columns}
      listQuery={{
        hook: useProductLineListPageQuery,
        queryName: 'productLines',
      }}
      loadingTip="Загрузка линеек продуктов"
      title="Список линеек продуктов"
      deleteItemMutation={{
        hook: useDeleteProductLineMutation,
        deleteName: 'deleteProductLine',
        listQueryDocument: ProductLineListPageDocument,
        queryName: 'productLines',
        successMessage: 'Линейка продуктов удалена.',
      }}
    />
  )
}

export default ProductLineListPage
