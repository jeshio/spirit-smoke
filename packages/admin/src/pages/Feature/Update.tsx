import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useFeatureItemPageQuery, useUpdateFeatureMutation } from '@/gql/__generated__/types'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { RouteComponentProps } from 'react-router'
import { notification } from 'antd'
import FeatureForm, { IFeatureFormProps } from './Form'

interface IFeatureUpdatePageProps extends RouteComponentProps<{ id: string }> {}

const FeatureUpdatePage: React.FunctionComponent<IFeatureUpdatePageProps> = (props) => {
  const { id } = props.match.params
  const [featureQuery, featureQueryComponent] = useStableQuery(useFeatureItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка особенности',
    queryName: 'feature',
  })
  const [updateFeature, updateFeatureRequest] = useUpdateFeatureMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Особенность успешно обновлена!',
        })
        props.history.push(`/features/${id}`)
      }
    },
    onError: () => {},
  })
  const handleSubmit: IFeatureFormProps['onSubmit'] = (fields: any) => {
    updateFeature({
      variables: {
        id,
        input: fields,
      },
    })
  }

  if (featureQueryComponent || !featureQuery?.data.feature) return featureQueryComponent as React.ReactElement

  const { feature } = featureQuery.data

  return (
    <UPageContainer title="Редактирование особенности">
      <FeatureForm isUpdate feature={feature} loading={updateFeatureRequest.loading} onSubmit={handleSubmit} />
    </UPageContainer>
  )
}

export default FeatureUpdatePage
