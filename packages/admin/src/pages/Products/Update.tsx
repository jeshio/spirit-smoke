import * as React from 'react';
import UPageContainer from '@/ui-components/UPageContainer';
import { notification } from 'antd';
import { useUpdateProductMutation, useProductSimpleItemQuery } from '@/gql/__generated__/types';
import { RouteComponentProps } from 'react-router';
import Exception from '@/components/Exception';
import ULoading from '@/ui-components/ULoading';
import Form, { IFormProps } from './Form';

interface IAddProductProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const UpdateProduct: React.FunctionComponent<IAddProductProps> = (props) => {
  const id = props.match.params.id || '';
  const productRequest = useProductSimpleItemQuery({
    variables: {
      id,
    },
  });
  const [updateProduct, updateProductRequest] = useUpdateProductMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Продукт успешно обнавлён!',
        });
        props.history.push(`/products/${id}`);
      }
    },
    onError: () => {},
  });

  if (productRequest.error) return <Exception type="404" />;

  if (productRequest.loading || !productRequest.data) return <ULoading />;

  const { product } = productRequest.data;

  const handleSubmit: IFormProps['onSubmit'] = (fields) => {
    updateProduct({
      variables: {
        id: product.id,
        input: fields as any,
      },
    });
  };

  return (
    <UPageContainer title={`Редактирование продукта ${product.name}`}>
      <Form onSubmit={handleSubmit} loading={updateProductRequest.loading} product={product} isUpdate />
    </UPageContainer>
  );
};

export default UpdateProduct;
