import React, { useCallback, useEffect, useMemo, useState } from 'react'
import UMetaTitle from '@/ui-components/UMetaTitle'
import CCompaniesSelector from '@/containers/CCompaniesSelector'
import UContent from '@/ui-components/UContent'
import { useProductsCatalogLazyQuery, useProductCategoryMinimumItemLazyQuery } from '@/gql/__generated__/types'
import WProductCard from '@/ui-widgets/WProductCard'
import WProductsSlider from '@/ui-widgets/WProductsSlider'
import CFeaturesSelector from '@/containers/CFeaturesSelector'
import UTitle from '@/ui-components/UTitle'
import isServer from '@/helpers/isServer'
import CFooter from '@/containers/CFooter'
import { useReactiveVar } from '@apollo/client'
import { productCategoriesFiltersVar } from '@/gql/cache/vars/ProductCategoriesFilters'

interface IProductCategoryPageContainerProps {
  title?: string
  currentCategorySlug: string
}

const ProductCategoryPageContainer: React.FunctionComponent<IProductCategoryPageContainerProps> = ({
  currentCategorySlug,
  title,
}) => {
  const [featuresVisible, setFeaturesVisible] = useState(false)
  const [getProductCategory, productCategoryRequest] = useProductCategoryMinimumItemLazyQuery()
  const [getProductsCatalog, productsCatalogRequest] = useProductsCatalogLazyQuery()
  const pageTitle = useMemo(() => title || productCategoryRequest.data?.productCategory.name, [
    title,
    productCategoryRequest,
  ])
  const fetch = useCallback(() => {
    if (!title) {
      getProductCategory({
        variables: {
          idSlug: currentCategorySlug,
        },
      })
    }
    getProductsCatalog({
      variables: {
        categorySlug: currentCategorySlug,
      },
    })
  }, [currentCategorySlug, getProductCategory, getProductsCatalog])
  const filters = useReactiveVar(productCategoriesFiltersVar)
  const selectedCompanyIds = filters[currentCategorySlug]?.selectedCompanyIds || []
  const selectedFeatureIds = filters[currentCategorySlug]?.selectedFeatureIds || []
  const productsCatalogItems = useMemo(
    () =>
      productsCatalogRequest.data?.productsByCategory
        .filter((product) => {
          const productFeatureIds = product.features.map(({ id }) => id)
          return (
            (selectedCompanyIds.length === 0 || selectedCompanyIds.includes(product.company.id)) &&
            (selectedFeatureIds.length === 0 || selectedFeatureIds.every((id) => productFeatureIds.includes(id)))
          )
        })
        .map((product) => <WProductCard key={product.id} product={product} />) || [],
    [productsCatalogRequest.data?.productsByCategory, selectedCompanyIds, selectedFeatureIds]
  )

  if (isServer() && !productsCatalogRequest.called && !productCategoryRequest.called) {
    fetch()
  }

  useEffect(() => {
    fetch()
  }, [currentCategorySlug])

  return (
    <>
      {pageTitle && <UMetaTitle title={pageTitle} />}

      <UContent>
        <UTitle level={2}>Топ-9 за неделю</UTitle>
      </UContent>

      <WProductsSlider items={productsCatalogItems.slice(0, 9)} />

      <CCompaniesSelector productCategorySlug={currentCategorySlug} />

      <UContent forwardStyleConfig={{ mt: [5] }}>
        <UTitle level={2}>Новые поступления</UTitle>
      </UContent>

      <WProductsSlider items={productsCatalogItems.slice(0, 12)} />

      {featuresVisible && (
        <UContent forwardStyleConfig={{ mt: [5] }}>
          <UTitle level={2}>Предпочтения</UTitle>
        </UContent>
      )}

      <CFeaturesSelector setVisible={setFeaturesVisible} productCategorySlug={currentCategorySlug} />

      <CFooter />
    </>
  )
}

export default ProductCategoryPageContainer
