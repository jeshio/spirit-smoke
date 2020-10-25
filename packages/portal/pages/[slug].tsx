import ProductCategoryPageContainer from '@/pageContainers/ProductsCategoryPage'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'

interface IProductCategoryPageProps {}

const ProductCategoryPage: React.FunctionComponent<IProductCategoryPageProps> = () => {
  const router = useRouter()
  const currentCategorySlug = router.query.slug as string
  return <ProductCategoryPageContainer currentCategorySlug={currentCategorySlug} />
}

export default ProductCategoryPage
