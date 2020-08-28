import { DocumentNode } from '@apollo/client';
import { notification } from 'antd';
import { MutationHookType } from '@/types/apollo';

const useDeleteListItemMutation = (
  useDeleteItemMutation: MutationHookType<any, any>,
  query: DocumentNode,
  queryName: string,
  deleteName: string,
  successMessage = 'Удалено.',
) => {
  const [deleteItem] = useDeleteItemMutation({
    update: (cache, { data: responseData }) => {
      const deletedItemId = responseData?.[deleteName];
      if (deletedItemId) {
        cache.modify({
          id: deletedItemId,
          fields: {
            [queryName]: (itemRefs, { readField }) => {
              const items = [...itemRefs];

              const deletedIndex = items.findIndex((item) => readField('id', item) === deletedItemId);

              if (deletedIndex < 0) return items;

              items.splice(deletedIndex, 1);

              return items;
            },
          },
        });
      }
    },
    onCompleted: (response) => {
      if (!('error' in response)) {
        notification.success({ message: successMessage });
      }
    },
    onError: () => {},
  });
  const handleDeleteItem = (id: string) =>
    deleteItem({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        [deleteName]: id,
      },
    });

  type ResultType = [typeof handleDeleteItem, typeof deleteItem];

  return [handleDeleteItem, deleteItem] as ResultType;
};

export default useDeleteListItemMutation;
