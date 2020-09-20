import { useCompaniesSelectorQuery } from '@/gql/__generated__/types'
import * as React from 'react'
import { CompanyItem, Root } from './index.styled'

interface ICCompaniesSelectorProps {}

const CCompaniesSelector: React.FunctionComponent<ICCompaniesSelectorProps> = (props) => {
  const { loading, data } = useCompaniesSelectorQuery()

  if (loading || !data) return <span>Загрузка...</span>

  const items = data.companies.map((company) => <CompanyItem key={company.id}>{company.name}</CompanyItem>)

  return <Root items={items} isHorizontal />
}

export default CCompaniesSelector
