import * as React from 'react'

import { IColumn } from '@/ui-components/UTable/types'
import { Link } from 'umi'
import UButton from '@/ui-components/UButton'
import { EditFilled, DeleteFilled } from '@ant-design/icons'
import UPopconfirm from '@/ui-components/UPopconfirm'
import {
  CompanyListPageFragment,
  useCompanyListPageQuery,
  useDeleteCompanyMutation,
  CompanyListPageDocument,
} from '@/gql/__generated__/types'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'

const columns: ListColumnsType = ({ deleteItem }): IColumn<CompanyListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: 'Имя',
    field: 'name',
    render: (name, { id }) => <Link to={`/companies/${id}`}>{name}</Link>,
  },
  // {
  //   title: 'Цвет',
  //   field: 'color',
  // },
  {
    title: 'Создан',
    field: 'createdAt',
  },
  {
    title: 'Slug',
    field: 'slug',
    responsive: ['xl'],
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
          title="Все линейки и продукты компании станут недоступны для клиентов. Вы уверены?"
          placement="topRight"
        >
          <UButton type="link" danger>
            <DeleteFilled />
          </UButton>
        </UPopconfirm>
        <Link to={`/companies/${id}/edit`}>
          <EditFilled />
        </Link>
      </>
    ),
  },
]

interface ICompanyListPageProps {}

const CompanyListPage: React.FunctionComponent<ICompanyListPageProps> = () => {
  return (
    <ListPageBuilder
      addItemButton={{
        link: '/companies/add',
        name: 'Добавить компанию',
      }}
      columns={columns}
      listQuery={{
        hook: useCompanyListPageQuery,
        queryName: 'companies',
      }}
      loadingTip="Загрузка компаний"
      title="Список компаний"
      deleteItemMutation={{
        hook: useDeleteCompanyMutation,
        deleteName: 'deleteCompany',
        listQueryDocument: CompanyListPageDocument,
        queryName: 'companies',
        successMessage: 'Компания удалена.',
      }}
    />
  )
}

export default CompanyListPage
