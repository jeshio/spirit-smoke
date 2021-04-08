import * as React from 'react'

import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import UButton from '@/ui-components/UButton'
import { EditFilled, DeleteFilled } from '@ant-design/icons'
import UPopconfirm from '@/ui-components/UPopconfirm'
import {
  ProductLineListPageFragment,
  useProductLineListPageQuery,
  useDeleteProductLineMutation,
  ProductLineListPageDocument,
} from '@/gql/__generated__/types'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'

const columns: ListColumnsType = ({ deleteItem }): IColumn<ProductLineListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Имя',
    field: 'name',
    render: (name, { id }) => <Link to={`/product-lines/${id}`}>{name}</Link>,
  },
  {
    title: 'Slug',
    field: 'slug',
    responsive: ['xl'],
  },
  {
    title: 'Штрихкод',
    field: 'barcode',
  },
  {
    title: 'Цвет',
    field: 'color',
  },
  {
    title: 'Страна',
    field: 'country',
  },
  {
    title: 'Создан',
    field: 'createdAt',
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
