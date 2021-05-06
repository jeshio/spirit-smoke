import { useProcurementItemPageQuery, useUpdateProcurementMutation } from '@/gql/__generated__/types'
import useStableQuery from '@/hooks/gql/useStableQuery'
import UPageContainer from '@/ui-components/UPageContainer'
import { notification } from 'antd'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import ProcurementForm, { IProcurementFormProps } from './Form'

interface IUpdateProcurementPageProps
  extends RouteComponentProps<{
    id: string
  }> {}

const UpdateProcurementPage: React.FunctionComponent<IUpdateProcurementPageProps> = (props) => {
  const id = props.match.params.id || ''
  const [procurementQuery, procurementQueryComponent] = useStableQuery(useProcurementItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка поставки',
    queryName: 'procurement',
  })
  const [updateProcurement, updateProcurementRequest] = useUpdateProcurementMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Поставка успешно обновлена!',
        })
        props.history.push(`/procurements/${id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: IProcurementFormProps['onSubmit'] = (fields) => {
    updateProcurement({
      variables: {
        id,
        input: fields as any,
      },
    })
  }

  if (procurementQueryComponent || !procurementQuery?.data.procurement)
    return procurementQueryComponent as React.ReactElement

  const { procurement } = procurementQuery.data

  return (
    <UPageContainer title={`Редактирование поставки #${procurement.id}`}>
      <ProcurementForm
        onSubmit={handleSubmit}
        loading={updateProcurementRequest.loading}
        procurement={procurement}
        isUpdate
      />
    </UPageContainer>
  )
}

export default UpdateProcurementPage
