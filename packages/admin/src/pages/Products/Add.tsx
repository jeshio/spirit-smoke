import * as React from 'react';
import UPageContainer from '@/ui-components/UPageContainer';
import { notification } from 'antd';
import { useCreateProductMutation } from '@/gql/__generated__/types';
import { RouteComponentProps } from 'react-router';
import Form, { IFormProps } from './Form';

interface IAddProductProps extends RouteComponentProps {}

const AddProduct: React.FunctionComponent<IAddProductProps> = ({ history }) => {
  const [createProduct, createProductRequest] = useCreateProductMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Продукт успешно добавлен!',
        });
        history.push('/products');
      }
    },
    onError: () => {},
  });

  const handleSubmit: IFormProps['onSubmit'] = (fields) => {
    createProduct({
      variables: {
        input: fields as any,
      },
    });
  };

  return (
    <UPageContainer title="Добавление продукта">
      <Form onSubmit={handleSubmit} loading={createProductRequest.loading} />
    </UPageContainer>
  );
};

export default AddProduct;
