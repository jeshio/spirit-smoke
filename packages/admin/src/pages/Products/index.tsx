import * as React from 'react';
import { useQuery } from '@apollo/client';
import UTable from '@/ui-components/UTable';

import productsQuery from './gql/products.gql';

const columns: UTableTypes.IColumn[] = [
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: 'Имя',
    field: 'name',
  },
];

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = () => {
  const { loading, error, data } = useQuery<{ products: Array<{ name: string }> }>(productsQuery);

  if (loading) return <div>Загрузка</div>;

  if (error) return <div>Ошибка :(</div>;

  return <UTable<{ name: string }> columns={columns} dataSource={data?.products || []} rowKey="id" />;
};

export default Products;
