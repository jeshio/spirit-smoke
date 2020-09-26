import React from 'react'
import UMetaTitle from '@/ui-components/UMetaTitle'
import CCompaniesSelector from '@/containers/CCompaniesSelector'
import UContent from '@/ui-components/UContent'
import { useProductsCatalogQuery } from '@/gql/__generated__/types'
import WProductCard from '@/ui-widgets/WProductCard'
import WProductsSlider from '@/ui-widgets/WProductsSlider'

export default function Home() {
  const productsCatalogRequest = useProductsCatalogQuery({
    variables: {
      categoryId: '2',
    },
  })
  const productsCatalogItems =
    productsCatalogRequest.data?.productsByCategory.map((product) => (
      <WProductCard key={product.id} product={product} />
    )) || []

  return (
    <>
      <UMetaTitle title="Табак и угли для кальяна" />

      <CCompaniesSelector />

      <UContent>
        <h2>Новые поступления</h2>
      </UContent>

      <WProductsSlider items={productsCatalogItems} />
    </>
  )
}
