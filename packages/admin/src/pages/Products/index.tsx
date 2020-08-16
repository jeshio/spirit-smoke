import * as React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
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

  return <Table<{ name: string }> columns={columns} dataSource={data?.products || []} rowKey="id" />;
};

export default Products;
