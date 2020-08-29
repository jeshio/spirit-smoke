import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useCreateCompanyMutation } from '@/gql/__generated__/types'
import { RouteComponentProps } from 'react-router'
import { notification } from 'antd'
import CompanyForm, { ICompanyFormProps } from './Form'

interface IAddCompanyPageProps extends RouteComponentProps {}

const AddCompanyPage: React.FunctionComponent<IAddCompanyPageProps> = (props) => {
  const [createCompany, createCompanyRequest] = useCreateCompanyMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Производитель успешно добавлен!',
        })
        props.history.push(`/companies/${r.createCompany.id}`)
      }
    },
    onError: () => {},
  })

  const handleSubmit: ICompanyFormProps['onSubmit'] = (fields) => {
    createCompany({
      variables: {
        input: fields as any,
      },
    })
  }

  return (
    <UPageContainer title="Добавить производителя">
      <CompanyForm loading={createCompanyRequest.loading} onSubmit={handleSubmit} />
    </UPageContainer>
  )
}

export default AddCompanyPage
