import * as React from 'react'
import ProductCategoryPageContainer from '@/pageContainers/ProductCategoryPage'
import { useRouter } from 'next/dist/client/router'

interface IProductCategoryPageProps {}

const ProductCategoryPage: React.FunctionComponent<IProductCategoryPageProps> = () => {
  const router = useRouter()
  const currentCategorySlug = router.query.slug as string
  return <ProductCategoryPageContainer currentCategorySlug={currentCategorySlug} />
}

export default ProductCategoryPage
