import * as React from 'react';
import { Input, Card, InputNumber, Select } from 'antd';
import UForm from '@/ui-components/UForm';
import URow from '@/ui-components/URow';
import UCol from '@/ui-components/UCol';
import UButton from '@/ui-components/UButton';
import {
  useProductCategoryMinimumListQuery,
  useCompanyMinimumListQuery,
  ProductSimpleItemQuery,
} from '@/gql/__generated__/types';
import numberToPrice from '@@utils/src/numberToPrice';

export interface IFormProps {
  loading?: boolean;
  onSubmit: (values: Record<string, string>) => void;
  isUpdate?: boolean;
  product?: ProductSimpleItemQuery['product'];
}

const Form: React.FunctionComponent<IFormProps> = ({ loading = false, onSubmit, isUpdate = false, product }) => {
  const categoriesRequest = useProductCategoryMinimumListQuery();
  const companyRequest = useCompanyMinimumListQuery();
  const handleSubmit = (fields: any) =>
    onSubmit({
      ...fields,
      price: numberToPrice(parseFloat(fields.price)),
    });

  return (
    <UForm onFinish={handleSubmit} labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }}>
      <Card loading={categoriesRequest.loading || companyRequest.loading}>
        <URow>
          <UCol>
            <UForm.Item label="Категория" name="productCategoryId" required initialValue={product?.productCategoryId}>
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
            <UForm.Item label="Производитель" name="companyId" required initialValue={product?.companyId}>
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
            <UForm.Item label="Название" name="name" required initialValue={product?.name}>
              <Input />
            </UForm.Item>
            <UForm.Item label="Slug" required name="slug" initialValue={product?.slug}>
              <Input disabled={isUpdate} />
            </UForm.Item>
          </UCol>
          <UCol>
            <UForm.Item label="Количество" help="Добавляется поставками, убавляется заказами и списаниями">
              <InputNumber name="count" disabled value={isUpdate ? product?.count : 0} />
            </UForm.Item>
            <UForm.Item label="Цена (₽)" required name="price" initialValue={product?.price}>
              <InputNumber min={0} />
            </UForm.Item>
          </UCol>
        </URow>

        <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
          <UButton htmlType="submit" type="primary" loading={loading}>
            {isUpdate ? 'Применить изменения' : 'Добавить'}
          </UButton>
          <UButton href="/products" type="link" loading={loading}>
            Вернуться к списку
          </UButton>
        </UForm.Item>
      </Card>
    </UForm>
  );
};

export default Form;
