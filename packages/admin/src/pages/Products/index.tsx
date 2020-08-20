import * as React from 'react';
import { useQuery } from '@apollo/client';
import UTable from '@/ui-components/UTable';

import { ProductsListPageQuery, ListPageProductFragment } from '@/gql/__generated__/types';
import withPageHeader from '@/hocs/ui/withPageHeader';
import { IColumn } from '@/ui-components/UTable/types';
import productsQuery from './gql/products.gql';

const columns: IColumn<ListPageProductFragment>[] = [
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: 'Имя',
    field: 'name',
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
];

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = () => {
  const { loading, error, data } = useQuery<ProductsListPageQuery, ListPageProductFragment>(productsQuery);

  if (loading) return <div>Загрузка</div>;

  if (error) return <div>Ошибка :(</div>;

  return <UTable<ListPageProductFragment | any> columns={columns} dataSource={data?.products || []} />;
};

export default withPageHeader({
  title: 'Список продуктов',
})(Products);
