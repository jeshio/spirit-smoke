import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { useFeatureItemPageQuery, useDeleteFeatureMutation } from '@/gql/__generated__/types'
import UPageContainer from '@/ui-components/UPageContainer'
import UPopconfirm from '@/ui-components/UPopconfirm'
import UButton from '@/ui-components/UButton'
import { DeleteFilled, EditFilled } from '@ant-design/icons'
import URow from '@/ui-components/URow'
import UCol from '@/ui-components/UCol'
import { Card } from 'antd'
import UDescriptions from '@/ui-components/UDescriptions'
import UBlock from '@/ui-components/UBlock'
import { ItemImage } from './styles/item.styled'

interface IFeatureItemPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const FeatureItemPage: React.FunctionComponent<IFeatureItemPageProps> = (props) => {
  const { id } = props.match.params
  const [query, queryComponent] = useStableQuery(useFeatureItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка особенности',
    queryName: 'feature',
  })
  const [deleteFeature] = useDeleteFeatureMutation({
    variables: {
      id,
    },
    onCompleted: () => {
      props.history.push('/features')
    },
    onError: () => {},
  })

  if (queryComponent || !query?.data.feature) return queryComponent as React.ReactElement

  const { feature } = query.data

  return (
    <UPageContainer
      title={feature.name}
      extra={
        <>
          <UPopconfirm onConfirm={deleteFeature as any}>
            <UButton danger icon={<DeleteFilled />}>
              Удалить
            </UButton>
          </UPopconfirm>
          <UButton type="primary" href={`/features/${feature.id}/edit`} icon={<EditFilled />}>
            Редактировать
          </UButton>
        </>
      }
    >
      <Card title={`Информация об особенности (ID ${feature.id})`}>
        <URow>
          <UCol span={24} md={2} xxl={1}>
            <UBlock pb={[5, 5, 5, 0]} pt={[0, 0, 0, 2]}>
              <ItemImage
                style={{
                  backgroundImage: `url(${feature.imageUrl})`,
                }}
              />
            </UBlock>
          </UCol>
          <UCol span={24} md={22} xxl={23}>
            <UDescriptions>
              <UDescriptions.Item label="Название">{feature.name}</UDescriptions.Item>
              <UDescriptions.Item label="slug">{feature.slug}</UDescriptions.Item>
              <UDescriptions.Item label="Отключено?">{feature.isDisabled ? 'Да' : 'Нет'}</UDescriptions.Item>
              <UDescriptions.Item label="Добавлено">{feature.createdAt}</UDescriptions.Item>
              <UDescriptions.Item label="Обновлено">{feature.updatedAt}</UDescriptions.Item>
            </UDescriptions>
          </UCol>
        </URow>
      </Card>
      <URow gutter={[4, 8]}>
        <UCol xxl={12}>
          <Card title="Статистика">В разработке</Card>
        </UCol>
        <UCol xxl={12}>
          <Card title="Категории продуктов с этой особенностью">В разработке</Card>
          <Card title="Продукты с этой особенностью">В разработке</Card>
        </UCol>
      </URow>
    </UPageContainer>
  )
}

export default FeatureItemPage
