import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useProductItemPageQuery, useDeleteProductMutation } from '@/gql/__generated__/types';
import Exception from '@/components/Exception';
import UPageContainer from '@/ui-components/UPageContainer';
import { Card } from 'antd';
import UDescriptions from '@/ui-components/UDescriptions';
import UButton from '@/ui-components/UButton';
import UPopconfirm from '@/ui-components/UPopconfirm';

interface IProductPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const ProductPage: React.FunctionComponent<IProductPageProps> = (props) => {
  const { id } = props.match.params;
  const { loading, error, data } = useProductItemPageQuery({
    variables: {
      id,
    },
  });
  const [deleteProduct] = useDeleteProductMutation({
    variables: {
      id,
    },
    onCompleted: () => {
      props.history.push('/products');
    },
    onError: () => {},
  });
  const { product } = data || {};

  if (error) return <div>Ошибка :(</div>;

  if (loading) return <div>Загрузка</div>;

  if (!product) return <Exception type="404" />;

  return (
    <UPageContainer
      title={`${product.company.name}, ${product.name}`}
      pageTitle={`Продукт ${product.name}`}
      extra={
        <>
          <UPopconfirm onConfirm={deleteProduct as any}>
            <UButton danger>Удалить</UButton>
          </UPopconfirm>
          <UButton type="primary" href={`/products/${product.id}/edit`}>
            Редактировать
          </UButton>
        </>
      }
    >
      <Card>
        <UDescriptions title={`Информация о продукте (ID ${product.id})`}>
          <UDescriptions.Item label="Осталось штук">{product.count}</UDescriptions.Item>
          <UDescriptions.Item label="Текущая цена">{product.price} ₽</UDescriptions.Item>
          <UDescriptions.Item label="Категория">{product.productCategory.name}</UDescriptions.Item>
          <UDescriptions.Item label="Компания">{product.company.name}</UDescriptions.Item>
          <UDescriptions.Item label="Название">{product.name}</UDescriptions.Item>
          <UDescriptions.Item label="Slug">{product.slug}</UDescriptions.Item>
          <UDescriptions.Item label="Добавлен">{product.createdAt}</UDescriptions.Item>
          <UDescriptions.Item label="Обновлён">{product.updatedAt}</UDescriptions.Item>
        </UDescriptions>
      </Card>
    </UPageContainer>
  );
};

export default ProductPage;
