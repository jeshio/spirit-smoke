import * as React from 'react'

import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import UButton from '@/ui-components/UButton'
import { EditFilled, DeleteFilled } from '@ant-design/icons'
import UPopconfirm from '@/ui-components/UPopconfirm'
import {
  ProductCategoryListPageFragment,
  useProductCategoryListPageQuery,
  useDeleteProductCategoryMutation,
  ProductCategoryListPageDocument,
} from '@/gql/__generated__/types'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import UFeaturesList from '@/ui-components/UFeaturesList'

const columns: ListColumnsType = ({ deleteItem }): IColumn<ProductCategoryListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Имя',
    field: 'name',
    render: (name, { id }) => <Link to={`/product-categories/${id}`}>{name}</Link>,
  },
  {
    title: 'Slug',
    field: 'slug',
    responsive: ['xl'],
  },
  {
    title: 'Особенности',
    field: 'features',
    render: (features) => <UFeaturesList features={features} isMini />,
    responsive: ['sm'],
  },
  {
    title: 'Иконка',
    field: 'iconUrl',
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
          title="Все продукты этой категории станут недоступны для клиентов. Вы уверены?"
          placement="topRight"
        >
          <UButton type="link" danger>
            <DeleteFilled />
          </UButton>
        </UPopconfirm>
        <Link to={`/product-categories/${id}/edit`}>
          <EditFilled />
        </Link>
      </>
    ),
  },
]

interface IProductCategoryListPageProps {}

const ProductCategoryListPage: React.FunctionComponent<IProductCategoryListPageProps> = () => {
  return (
    <ListPageBuilder
      addItemButton={{
        link: '/product-categories/add',
        name: 'Добавить категорию',
      }}
      columns={columns}
      listQuery={{
        hook: useProductCategoryListPageQuery,
        queryName: 'productCategories',
      }}
      loadingTip="Загрузка категорий продуктов"
      title="Список категорий продуктов"
      deleteItemMutation={{
        hook: useDeleteProductCategoryMutation,
        deleteName: 'deleteProductCategory',
        listQueryDocument: ProductCategoryListPageDocument,
        queryName: 'productCategories',
        successMessage: 'Категория продуктов удалена.',
      }}
    />
  )
}

export default ProductCategoryListPage
