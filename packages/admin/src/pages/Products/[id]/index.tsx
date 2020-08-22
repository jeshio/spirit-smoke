import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useProductItemPageQuery } from '@/gql/__generated__/types';
import Exception from '@/components/Exception';
import UPageContainer from '@/ui-components/UPageContainer';
import { Card } from 'antd';
import UDescriptions from '@/ui-components/UDescriptions';

interface IProductPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const ProductPage: React.FunctionComponent<IProductPageProps> = (props) => {
  const { loading, error, data } = useProductItemPageQuery({
    variables: {
      id: props.match.params.id,
    },
  });
  const { product } = data || {};

  if (error) return <div>Ошибка :(</div>;

  if (loading) return <div>Загрузка</div>;

  if (!product) return <Exception type="404" />;

  return (
    <UPageContainer title={product.name} pageTitle={`Продукт ${product.name}`}>
      <Card>
        <UDescriptions title={`Информация о продукте (ID ${product.id})`}>
          <UDescriptions.Item label="Категория">{product.productCategory.name}</UDescriptions.Item>
          <UDescriptions.Item label="Название">{product.name}</UDescriptions.Item>
          <UDescriptions.Item label="Slug">{product.slug}</UDescriptions.Item>
          <UDescriptions.Item label="Осталось штук">{product.count}</UDescriptions.Item>
          <UDescriptions.Item label="Текущая цена">{product.price}</UDescriptions.Item>
        </UDescriptions>
      </Card>
    </UPageContainer>
  );
};

export default ProductPage;
