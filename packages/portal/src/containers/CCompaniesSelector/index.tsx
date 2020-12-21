import { productCategoriesFiltersVar } from '@/gql/cache/vars/ProductCategoriesFilters'
import { setSelectedCompanyIds } from '@/gql/cache/vars/ProductCategoriesFilters/mutations'
import { useCompaniesSelectorQuery } from '@/gql/__generated__/types'
import { useReactiveVar } from '@apollo/client'
import { orderBy } from 'lodash'
import * as React from 'react'
import { CompanyItem, Root } from './index.styled'

interface ICCompaniesSelectorProps {
  productCategorySlug: string
}

const CCompaniesSelector: React.FunctionComponent<ICCompaniesSelectorProps> = ({ productCategorySlug }) => {
  const { loading, data } = useCompaniesSelectorQuery({
    variables: {
      productCategorySlug,
    },
  })
  const filters = useReactiveVar(productCategoriesFiltersVar)

  const handleItemClick = (companyId: string, currentIsActive: boolean) => () => {
    let newValue = []
    const currentSelectedCompanies = filters[productCategorySlug]?.selectedCompanyIds || []

    if (currentIsActive) {
      newValue = currentSelectedCompanies.filter((id) => id !== companyId)
    } else {
      newValue = [...currentSelectedCompanies, companyId]
    }

    setSelectedCompanyIds(productCategorySlug, newValue)
  }

  if (loading || !data) return <span>Загрузка...</span>

  const items = orderBy(data.companies, ['isSelectedForProductCategory', 'name'], ['desc', 'asc']).map((company) => (
    <CompanyItem
      key={company.id}
      color={company.color}
      isActive={company.isSelectedForProductCategory}
      onClick={handleItemClick(company.id, company.isSelectedForProductCategory)}
    >
      {company.name}
    </CompanyItem>
  ))

  return <Root items={items} isHorizontal />
}

export default CCompaniesSelector
