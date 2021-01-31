import * as React from 'react'
import UForm from '@/ui-components/UForm'
import { Card, Input, Switch } from 'antd'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import UButton from '@/ui-components/UButton'
import { FeatureItemPageFragment } from '@/gql/__generated__/types'
import UBlock from '@/ui-components/UBlock'
import updateSlugOnChangeTitle from '@/helpers/updateSlugOnChangeTitle'

export interface IFeatureFormProps {
  isUpdate?: boolean
  onSubmit: (values: Record<string, string>) => void
  feature?: FeatureItemPageFragment
  loading?: boolean
}

const FeatureForm: React.FunctionComponent<IFeatureFormProps> = ({ isUpdate = false, feature, loading, onSubmit }) => {
  return (
    <UForm labelCol={{ span: 6, sm: 6, md: 9, lg: 9, xl: 7, xxl: 7 }} onFinish={onSubmit}>
      {(_, form) => (
        <Card>
          <URow>
            <UCol md={20} lg={18} xl={10} xxl={8}>
              <UBlock mt={{ xl: 6 }}>
                <UForm.Item label="Название" name="name" required initialValue={feature?.name}>
                  <Input onChange={(e) => updateSlugOnChangeTitle(e.target.value, form)} />
                </UForm.Item>
                <UForm.Item label="Slug" name="slug" required initialValue={feature?.slug}>
                  <Input />
                </UForm.Item>
                <UForm.Item label="Изображение" name="imageUrl" initialValue={feature?.imageUrl}>
                  <Input />
                </UForm.Item>
                <UForm.Item label="Отключена" name="isDisabled" initialValue={feature?.isDisabled}>
                  <Switch defaultChecked={feature?.isDisabled} />
                </UForm.Item>

                <UForm.Item wrapperCol={{ md: { offset: 2 } }}>
                  <UButton htmlType="submit" type="primary" loading={loading}>
                    {isUpdate ? 'Применить изменения' : 'Добавить'}
                  </UButton>
                  {isUpdate && feature ? (
                    <UButton type="link" href={`/features/${feature.id}`}>
                      Вернуться к особенности
                    </UButton>
                  ) : (
                    <UButton href="/features" type="link">
                      Вернуться к списку
                    </UButton>
                  )}
                </UForm.Item>
              </UBlock>
            </UCol>
            {isUpdate && (
              <UCol xl={{ offset: 2, span: 12 }} xxl={{ offset: 4, span: 12 }}>
                <Card title="Категории продуктов с этой особенностью">В разработке</Card>
                <Card title="Продукты с этой особенностью">В разработке</Card>
              </UCol>
            )}
          </URow>
        </Card>
      )}
    </UForm>
  )
}

export default FeatureForm
