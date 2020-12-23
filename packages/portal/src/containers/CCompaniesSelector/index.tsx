import { productCategoriesFiltersVar } from '@/gql/cache/vars/ProductCategoriesFilters'
import { setSelectedCompanyIds } from '@/gql/cache/vars/ProductCategoriesFilters/mutations'
import { useCompaniesSelectorQuery } from '@/gql/__generated__/types'
import { useReactiveVar } from '@apollo/client'
import { orderBy } from 'lodash'
import React, { useMemo } from 'react'
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
  const noSelectedCompanies =
    filters[productCategorySlug] === undefined || filters[productCategorySlug]?.selectedCompanyIds.length === 0

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

  const items = useMemo(
    () =>
      orderBy(data?.companies || [], ['isSelectedForProductCategory', 'name'], ['desc', 'asc']).map((company) => (
        <CompanyItem
          key={company.id}
          color={company.color}
          isActive={noSelectedCompanies || company.isSelectedForProductCategory}
          onClick={handleItemClick(company.id, company.isSelectedForProductCategory)}
        >
          {company.name}
        </CompanyItem>
      )),
    [data, noSelectedCompanies, handleItemClick]
  )

  if (loading || !data) return <span>Загрузка...</span>

  return <Root items={items} isHorizontal />
}

export default CCompaniesSelector
