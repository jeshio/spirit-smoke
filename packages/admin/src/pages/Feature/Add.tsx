import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useCreateFeatureMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import { notification } from 'antd'
import FeatureForm, { IFeatureFormProps } from './Form'

interface IAddFeaturePageProps extends RouteComponentProps {}

const AddFeaturePage: React.FunctionComponent<IAddFeaturePageProps> = (props) => {
  const [createFeature, createFeatureRequest] = useCreateFeatureMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Особенность успешно добавлена!',
        })
        props.history.push(`/features/${r.createFeature.id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IFeatureFormProps['onSubmit'] = (fields) => {
    createFeature({
      variables: {
        input: fields as any,
      },
    })
  }

  return (
    <UPageContainer title="Добавить особенность">
      <FeatureForm loading={createFeatureRequest.loading} onSubmit={handleSubmit} />
    </UPageContainer>
  )
}

export default AddFeaturePage
