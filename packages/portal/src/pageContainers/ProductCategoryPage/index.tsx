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
  const productsCatalogItems = useMemo(
    () =>
      productsCatalogRequest.data?.productsByCategory.map((product) => (
        <WProductCard key={product.id} product={product} />
      )) || [],
    [productsCatalogRequest]
  )
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
        categoryIdSlug: currentCategorySlug,
      },
    })
  }, [currentCategorySlug, getProductCategory, getProductsCatalog])

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

      <WProductsSlider items={productsCatalogItems.slice(12, 21)} />

      <CCompaniesSelector />

      <UContent forwardStyleConfig={{ mt: [5] }}>
        <UTitle level={2}>Новые поступления</UTitle>
      </UContent>

      <WProductsSlider items={productsCatalogItems.slice(0, 12)} />

      {featuresVisible && (
        <UContent forwardStyleConfig={{ mt: [5] }}>
          <UTitle level={2}>Предпочтения</UTitle>
        </UContent>
      )}

      <CFeaturesSelector setVisible={setFeaturesVisible} />
    </>
  )
}

export default ProductCategoryPageContainer
