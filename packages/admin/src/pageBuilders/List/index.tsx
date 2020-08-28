import * as React from 'react'
import UTable, { IUTableProps } from '@/ui-components/UTable'

import { IColumn } from '@/ui-components/UTable/types'
import UPageContainer from '@/ui-components/UPageContainer'
import UButton from '@/ui-components/UButton'
import { PlusOutlined } from '@ant-design/icons'
import ULoading from '@/ui-components/ULoading'
import Exception from '@/components/Exception'
import { QueryHookType, MutationHookType } from '@/types/apollo'
import { QueryHookOptions, DocumentNode } from '@apollo/client'
import useDeleteListItemMutation from '@/hooks/gql/useDeleteListItemMutation'

export type DeleteItemType = (id: string) => void

export type ListColumnsType = ({ deleteItem }: { deleteItem: DeleteItemType }) => IColumn<any>[]

interface IListPageBuilderProps<RecordType> {
  columns: ListColumnsType
  listQuery: {
    hook: QueryHookType<any, any>
    queryName: string
    hookOptions?: QueryHookOptions<any, any>
  }
  deleteItemMutation: {
    hook: MutationHookType<any, any>
    listQueryDocument: DocumentNode
    queryName: string
    deleteName: string
    successMessage: string
  }
  loadingTip: string
  title: string
  addItemButton: {
    name: string
    link: string
  }
  tableProps?: Partial<IUTableProps<RecordType>>
}

function ListPageBuilder<RecordType>({
  columns,
  loadingTip,
  title,
  addItemButton,
  listQuery,
  deleteItemMutation,
  tableProps,
}: IListPageBuilderProps<RecordType>) {
  const useQuery = listQuery.hook
  const { error, data } = useQuery(listQuery.hookOptions || {})
  const [handleDeleteItem] = useDeleteListItemMutation(
    deleteItemMutation.hook,
    deleteItemMutation.listQueryDocument,
    deleteItemMutation.queryName,
    deleteItemMutation.deleteName,
    deleteItemMutation.successMessage
  )

  if (!data) return <ULoading tip={loadingTip} />

  if (error) return <Exception apolloError={error} />

  return (
    <UPageContainer
      title={title}
      extra={
        <UButton href={addItemButton.link} type="primary" icon={<PlusOutlined />}>
          {addItemButton.name}
        </UButton>
      }
    >
      <UTable<any>
        {...tableProps}
        columns={columns({ deleteItem: handleDeleteItem })}
        dataSource={data?.[listQuery.queryName] || []}
      />
    </UPageContainer>
  )
}

export default ListPageBuilder
