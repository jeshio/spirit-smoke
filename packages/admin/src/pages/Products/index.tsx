import * as React from 'react';
import UTable from '@/ui-components/UTable';

import { ProductsListPageFragment, useProductsListPageQuery } from '@/gql/__generated__/types';
import { IColumn } from '@/ui-components/UTable/types';
import { Link } from 'umi';
import UPageContainer from '@/ui-components/UPageContainer';
import UButton from '@/ui-components/UButton';

const columns: IColumn<ProductsListPageFragment>[] = [
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
];

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = () => {
  const { loading, error, data } = useProductsListPageQuery();

  if (loading) return <div>Загрузка</div>;

  if (error) return <div>Ошибка :(</div>;

  return (
    <UPageContainer
      title="Список продуктов"
      extra={
        <UButton href="/products/add" type="primary">
          Добавить продукт
        </UButton>
      }
    >
      <UTable<ProductsListPageFragment | any> columns={columns} dataSource={data?.products || []} />
    </UPageContainer>
  );
};

export default Products;
