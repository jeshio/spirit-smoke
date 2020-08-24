import * as React from 'react';
import UPageContainer from '@/ui-components/UPageContainer';
import { Input, Card, InputNumber, Select, notification } from 'antd';
import UForm from '@/ui-components/UForm';
import URow from '@/ui-components/URow';
import UCol from '@/ui-components/UCol';
import UButton from '@/ui-components/UButton';
import {
  useCreateProductMutation,
  useProductCategoryMinimumListQuery,
  useCompanyMinimumListQuery,
} from '@/gql/__generated__/types';
import { RouteComponentProps } from 'react-router';
import numberToPrice from '@@utils/src/numberToPrice';

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
  const categoriesRequest = useProductCategoryMinimumListQuery();
  const companyRequest = useCompanyMinimumListQuery();

  const handleSubmit = (fields: any) => {
    createProduct({
      variables: {
        input: { ...fields, price: numberToPrice(parseFloat(fields.price)) },
      },
    });
  };

  return (
    <UPageContainer title="Добавление продукта">
      <UForm onFinish={handleSubmit}>
        <Card loading={categoriesRequest.loading || companyRequest.loading}>
          <URow>
            <UCol>
              <UForm.Item label="Категория" name="productCategoryId" required>
                <Select>
                  {categoriesRequest.data?.productCategories.map(({ id, name }) => (
                    <Select.Option value={id} key={id}>
                      ({id}) {name}
                    </Select.Option>
                  ))}
                </Select>
              </UForm.Item>
            </UCol>
            <UCol>
              <UForm.Item label="Производитель" name="companyId" required>
                <Select>
                  {companyRequest.data?.companies.map(({ id, name }) => (
                    <Select.Option value={id} key={id}>
                      ({id}) {name}
                    </Select.Option>
                  ))}
                </Select>
              </UForm.Item>
            </UCol>
          </URow>

          <URow>
            <UCol>
              <UForm.Item label="Название" name="name" required>
                <Input />
              </UForm.Item>
              <UForm.Item label="Slug" required name="slug">
                <Input />
              </UForm.Item>
            </UCol>
            <UCol>
              <UForm.Item label="Количество" help="Добавляется поставками, убавляется заказами и списаниями">
                <Input name="count" disabled value="0" />
              </UForm.Item>
              <UForm.Item label="Цена (₽)" required name="price">
                <InputNumber min={0} />
              </UForm.Item>
            </UCol>
          </URow>

          <URow>
            <UCol>
              <UForm.Item>
                <UButton htmlType="submit" type="primary" loading={createProductRequest.loading}>
                  Добавить
                </UButton>
                <UButton href="/products" type="link" loading={createProductRequest.loading}>
                  Отмена
                </UButton>
              </UForm.Item>
            </UCol>
          </URow>
        </Card>
      </UForm>
    </UPageContainer>
  );
};

export default AddProduct;
