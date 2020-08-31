import { DocumentNode } from '@apollo/client'
import { notification } from 'antd'
import { MutationHookType } from '@/types/apollo'

const useDeleteListItemMutation = (
  useDeleteItemMutation: MutationHookType<any, any>,
  query: DocumentNode,
  queryName: string,
  deleteName: string,
  successMessage = 'Удалено.'
) => {
  const [deleteItem] = useDeleteItemMutation({
    update: (cache, { data: responseData }) => {
      const deletedItemId = responseData?.[deleteName]
      if (deletedItemId) {
        const cacheQuery = cache.readQuery<{ [key: string]: any[] }>({ query })

        if (cacheQuery) {
          const { [queryName]: items } = cacheQuery
          const result = [...items]

          const deletedIndex = result.findIndex((item) => item.id === deletedItemId)

          if (deletedIndex < 0) return

          result.splice(deletedIndex, 1)

          cache.writeQuery({
            query,
            data: {
              [queryName]: result,
            },
          })
        }
      }
    },
    onCompleted: (response) => {
      if (!('error' in response)) {
        notification.success({ message: successMessage })
      }
    },
    onError: () => {},
  })
  const handleDeleteItem = (id: string) =>
    deleteItem({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        [deleteName]: id,
      },
    })

  type ResultType = [typeof handleDeleteItem, typeof deleteItem]

  return [handleDeleteItem, deleteItem] as ResultType
}

export default useDeleteListItemMutation
