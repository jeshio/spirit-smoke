import * as React from 'react'

import {
  ProductsListPageFragment,
  useProductsListPageQuery,
  useDeleteProductMutation,
  ProductsListPageDocument,
} from '@/gql/__generated__/types'
import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import UButton from '@/ui-components/UButton'
import { EditFilled, DeleteFilled } from '@ant-design/icons'
import UPopconfirm from '@/ui-components/UPopconfirm'
import ListPageBuilder, { ListColumnsType } from '@/pageBuilders/List'

const columns: ListColumnsType = ({ deleteItem }): IColumn<ProductsListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Производитель',
    field: ['company', 'name'],
    render: (name, { companyId }) => <Link to={`/companies/${companyId}`}>{name}</Link>,
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
    title: 'Количество',
    field: 'count',
  },
  {
    title: 'Текущая цена',
    field: 'price',
  },
  {
    title: 'Категория',
    field: ['productCategory', 'name'],
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
  return (
    <ListPageBuilder<ProductsListPageFragment>
      addItemButton={{
        link: '/products/add',
        name: 'Добавить продукт',
      }}
      columns={columns}
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
          company: undefined,
          productCategory: undefined,
        },
      }}
    />
  )
}

export default ProductListPage
