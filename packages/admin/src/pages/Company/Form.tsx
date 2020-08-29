import * as React from 'react'
import UForm from '@/ui-components/UForm'
import { Card, Input } from 'antd'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UButton from '@/ui-components/UButton'
import { CompanyItemPageFragment } from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'
import ProductsTable from './components/ProductsTable'

export interface ICompanyFormProps {
  isUpdate?: boolean
  onSubmit: (values: Record<string, string>) => void
  company?: CompanyItemPageFragment
  loading?: boolean
}

const CompanyForm: React.FunctionComponent<ICompanyFormProps> = ({ isUpdate = false, company, loading, onSubmit }) => {
  return (
    <UForm labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }} onFinish={onSubmit}>
      <Card>
        <URow>
          <UCol md={20} lg={18} xl={10} xxl={8}>
            <UBlock mt={{ xl: 6 }}>
              <UForm.Item label="Название" name="name" required initialValue={company?.name}>
                <Input />
              </UForm.Item>
              <UForm.Item label="Slug" name="slug" required initialValue={company?.slug}>
                <Input />
              </UForm.Item>

              <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
                <UButton htmlType="submit" type="primary" loading={loading}>
                  {isUpdate ? 'Применить изменения' : 'Добавить'}
                </UButton>
                {isUpdate && company ? (
                  <UButton type="link" href={`/companies/${company.id}`}>
                    Вернуться к производителю
                  </UButton>
                ) : (
                  <UButton href="/companies" type="link">
                    Вернуться к списку
                  </UButton>
                )}
              </UForm.Item>
            </UBlock>
          </UCol>
          {isUpdate && (
            <UCol xl={{ offset: 2, span: 12 }} xxl={{ offset: 4, span: 12 }}>
              <Card title="Продукты производителя" size="small">
                <ProductsTable
                  products={company?.products}
                  tableProps={{
                    pagination: {
                      defaultPageSize: 5,
                    },
                  }}
                />
              </Card>
            </UCol>
          )}
        </URow>
      </Card>
    </UForm>
  )
}

export default CompanyForm
