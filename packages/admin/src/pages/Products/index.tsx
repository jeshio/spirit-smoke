import * as React from 'react';
import { useQuery, gql } from '@apollo/client';
import UTable from '@/ui-components/UTable';

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

const EXCHANGE_RATES = gql`
  query GetProducts {
    products {
      id
      name
    }
  }
`;

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = () => {
  const { loading, error, data } = useQuery<{ products: Array<{ name: string }> }>(EXCHANGE_RATES);

  if (loading) return <div>Загрузка</div>;

  if (error) return <div>Ошибка :(</div>;

  return <UTable<{ name: string }> columns={columns} dataSource={data?.products || []} rowKey="id" />;
};

export default Products;
