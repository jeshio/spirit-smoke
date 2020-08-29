import * as React from 'react'
import UPageContainer from '@/ui-components/UPageContainer'
import { useCompanyItemPageQuery, useUpdateCompanyMutation } from '@/gql/__generated__/types'
import useStableQuery from '@/hooks/gql/useStableQuery'
import { RouteComponentProps } from 'react-router'
import { notification } from 'antd'
import CompanyForm, { ICompanyFormProps } from './Form'

interface ICompanyUpdatePageProps extends RouteComponentProps<{ id: string }> {}

const CompanyUpdatePage: React.FunctionComponent<ICompanyUpdatePageProps> = (props) => {
  const { id } = props.match.params
  const [companyQuery, companyQueryComponent] = useStableQuery(useCompanyItemPageQuery, {
    variables: {
      id,
    },
    loadingTip: 'Загрузка продукта',
    queryName: 'company',
  })
  const [updateCompany, updateCompanyRequest] = useUpdateCompanyMutation({
    onCompleted: (r) => {
      if (!('errors' in r)) {
        notification.success({
          message: 'Производитель успешно обновлён!',
        })
        props.history.push(`/companies/${id}`)
      }
    },
    onError: () => {},
  })
  const handleSubmit: ICompanyFormProps['onSubmit'] = (fields) => {
    updateCompany({
      variables: {
        id,
        input: fields as any,
      },
    })
  }

  if (companyQueryComponent || !companyQuery?.data.company) return companyQueryComponent as React.ReactElement

  const { company } = companyQuery.data

  return (
    <UPageContainer title="Редактирование производителя">
      <CompanyForm isUpdate company={company} loading={updateCompanyRequest.loading} onSubmit={handleSubmit} />
    </UPageContainer>
  )
}

export default CompanyUpdatePage
