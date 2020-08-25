import * as React from 'react';
import UTable from '@/ui-components/UTable';

import {
  ProductsListPageFragment,
  useProductsListPageQuery,
  useDeleteProductMutation,
  ProductsListPageDocument,
  ProductsListPageQueryResult,
} from '@/gql/__generated__/types';
import { IColumn } from '@/ui-components/UTable/types';
import { Link } from 'umi';
import UPageContainer from '@/ui-components/UPageContainer';
import UButton from '@/ui-components/UButton';
import { EditFilled, DeleteFilled, PlusOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import UPopconfirm from '@/ui-components/UPopconfirm';
import ULoading from '@/ui-components/ULoading';

const columns = (deleteProduct: (id: string) => any): IColumn<ProductsListPageFragment>[] => [
  {
    title: 'ID',
    field: 'id',
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
    disableSort: true,
    render: (id) => (
      <>
        <UPopconfirm onConfirm={() => deleteProduct(id)}>
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
];

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = () => {
  const { error, data } = useProductsListPageQuery();
  const [deleteProduct] = useDeleteProductMutation({
    update: (cache, { data: responseData }) => {
      const deletedProductId = responseData?.deleteProduct;
      const queryResult = cache.readQuery<ProductsListPageQueryResult['data']>({
        query: ProductsListPageDocument,
      });
      if (queryResult && deletedProductId) {
        const products = [...queryResult.products];

        const deletedIndex = products.findIndex((product) => product.id === deletedProductId);

        if (deletedIndex < 0) return;

        products.splice(deletedIndex, 1);

        cache.writeQuery({
          query: ProductsListPageDocument,
          data: {
            products,
          },
        });
      }
    },
    onCompleted: (response) => {
      if (!('error' in response)) {
        notification.success({ message: 'Продукт удалён.' });
      }
    },
    onError: () => {},
  });
  const handleDeleteProduct = (id: string) =>
    deleteProduct({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        deleteProduct: id,
      },
    });

  if (!data) return <ULoading tip="Загрузка продуктов" />;

  if (error) return <div>Ошибка :(</div>;

  return (
    <UPageContainer
      title="Список продуктов"
      extra={
        <UButton href="/products/add" type="primary" icon={<PlusOutlined />}>
          Добавить продукт
        </UButton>
      }
    >
      <UTable<ProductsListPageFragment | any>
        columns={columns(handleDeleteProduct)}
        dataSource={data?.products || []}
      />
    </UPageContainer>
  );
};

export default Products;
