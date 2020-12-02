import React from 'react'
import ProductCategoryPageContainer from '@/pageContainers/ProductCategoryPage'
const { NEXT_PUBLIC_TOBACCO_PRODUCT_CATEGORY_SLUG } = process.env

export default function Home() {
  return (
    <ProductCategoryPageContainer
      currentCategorySlug={NEXT_PUBLIC_TOBACCO_PRODUCT_CATEGORY_SLUG}
      title="Табак и угли для кальяна"
    />
  )
}
