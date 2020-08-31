import * as React from 'react'
import {
  FeatureListPageFragment,
  FeatureListPageDocument,
  useFeatureListPageQuery,
  useDeleteFeatureMutation,
} from '@/gql/__generated__/types'
import { IColumn } from '@/ui-components/UTable/types'
import ListPageBuilder, { ListColumnsType } from '@/builders/ListPage'
import { Link } from 'umi'
import UPopconfirm from '@/ui-components/UPopconfirm'
import UButton from '@/ui-components/UButton'
import { DeleteFilled, EditFilled, CloseOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import { Tooltip } from 'antd'

const columns: ListColumnsType = ({ deleteItem }): IColumn<FeatureListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
    width: 50,
  },
  {
    title: '',
    field: 'imageUrl',
    render: (imageUrl) => <Avatar src={imageUrl} />,
    width: 50,
    disableSort: true,
  },
  {
    title: 'Имя',
    field: 'name',
    render: (name, { id }) => <Link to={`/features/${id}`}>{name}</Link>,
  },
  {
    field: 'isDisabled',
    title: '',
    render: (isDisabled) =>
      isDisabled && (
        <Tooltip title="Особенность заблокирована и не видна пользователям">
          <CloseOutlined />
        </Tooltip>
      ),
    width: 50,
    disableSort: true,
  },
  {
    title: 'Slug',
    field: 'slug',
    responsive: ['xl'],
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
          title="Эта особенность также удалится у всех продуктов и категорий. Вы уверены?"
          placement="topRight"
        >
          <UButton type="link" danger>
            <DeleteFilled />
          </UButton>
        </UPopconfirm>
        <Link to={`/features/${id}/edit`}>
          <EditFilled />
        </Link>
      </>
    ),
  },
]

interface IFeatureListPageProps {}

const FeatureListPage: React.FunctionComponent<IFeatureListPageProps> = () => {
  return (
    <ListPageBuilder
      addItemButton={{
        link: '/features/add',
        name: 'Добавить особенность',
      }}
      columns={columns}
      listQuery={{
        hook: useFeatureListPageQuery,
        queryName: 'features',
      }}
      loadingTip="Загрузка особенностей"
      title="Список особенностей"
      deleteItemMutation={{
        hook: useDeleteFeatureMutation,
        deleteName: 'deleteFeature',
        listQueryDocument: FeatureListPageDocument,
        queryName: 'features',
        successMessage: 'Особенность удалена.',
      }}
      tableProps={{
        invalidRowCondition: {
          isDisabled: true,
        },
      }}
    />
  )
}

export default FeatureListPage
