import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { notification } from 'antd'
import { useCreateProcurementMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import ProcurementForm, { IProcurementFormProps } from './Form'

interface IAddProcurementPageProps extends RouteComponentProps {}

const AddProcurementPage: React.FunctionComponent<IAddProcurementPageProps> = ({ history }) => {
  const [createProcurement, createProcurementRequest] = useCreateProcurementMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Поставка успешно добавлена!',
        })
        history.push(`/procurements/${r.createProcurement.id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IProcurementFormProps['onSubmit'] = (fields) => {
    createProcurement({
      variables: {
        input: fields as any,
      },
    })
  }

  return (
    <UPageContainer title="Добавление поставки">
      <ProcurementForm onSubmit={handleSubmit} loading={createProcurementRequest.loading} />
    </UPageContainer>
  )
}

export default AddProcurementPage
