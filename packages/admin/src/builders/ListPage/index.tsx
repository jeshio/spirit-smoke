import React, { ReactElement, useMemo } from 'react'
import UTable, { IUTableProps } from '@/ui-components/UTable'

import { IColumn } from '@/ui-components/UTable/types'
import UPageContainer from '@/ui-components/UPageContainer'
import UButton from '@/ui-components/UButton'
import { PlusOutlined } from '@ant-design/icons'
import { QueryHookType, MutationHookType } from '@/types/apollo'
import { QueryHookOptions, DocumentNode } from '@apollo/client'
import useDeleteListItemMutation from '@/hooks/gql/useDeleteListItemMutation'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { Card } from 'antd'

export type DeleteItemType = (id: string) => void

export type ListColumnsType = ({ deleteItem }: { deleteItem: DeleteItemType }) => IColumn<any>[]

interface IListPageBuilderProps<RecordType> {
  columns: ListColumnsType
  listQuery: {
    hook: QueryHookType<any, any>
    queryName: string
    hookOptions?: QueryHookOptions<
      {
        [queryName: string]: RecordType[]
      },
      any
    >
  }
  deleteItemMutation?: {
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
  extraButtons?: ReactElement[]
  tableProps?: Partial<IUTableProps<RecordType>>
  filtersBar?: ReactElement
  filteredIds?: string[]
}

function ListPageBuilder<RecordType>({
  columns,
  loadingTip,
  title,
  addItemButton,
  listQuery,
  deleteItemMutation = {} as any,
  tableProps,
  extraButtons,
  filtersBar,
  filteredIds,
}: IListPageBuilderProps<RecordType>) {
  const [query, queryComponent, originalQuery] = useStableQuery(listQuery.hook, {
    ...listQuery.hookOptions,
    loadingTip,
    queryName: listQuery.queryName,
    fetchPolicy: 'cache-first',
  })
  const [handleDeleteItem] = useDeleteListItemMutation(
    deleteItemMutation.hook || (() => []),
    deleteItemMutation.listQueryDocument,
    deleteItemMutation.queryName,
    deleteItemMutation.deleteName,
    deleteItemMutation.successMessage
  )
  const dataSource = useMemo(
    () =>
      (query?.data[listQuery.queryName] || []).filter((item) => {
        if (filteredIds) {
          if ('id' in item) {
            return filteredIds.includes((item as any).id)
          }
        }

        return true
      }),
    [query, filteredIds]
  )

  React.useEffect(() => {
    // обход cache-first, принудительно делаем запрос при посещении страницы
    // для проверки добавляем сущность и возвращаемся к списку
    if (!originalQuery.loading) originalQuery.refetch()
  }, [])

  if (queryComponent || !query?.data[listQuery.queryName]) return queryComponent as React.ReactElement

  return (
    <UPageContainer
      title={title}
      extra={
        <>
          {extraButtons}
          <UButton href={addItemButton.link} type="primary" icon={<PlusOutlined />}>
            {addItemButton.name}
          </UButton>
        </>
      }
    >
      {filtersBar && <Card>{filtersBar}</Card>}
      <UTable<any> {...tableProps} columns={columns({ deleteItem: handleDeleteItem })} dataSource={dataSource} />
    </UPageContainer>
  )
}

export default ListPageBuilder
