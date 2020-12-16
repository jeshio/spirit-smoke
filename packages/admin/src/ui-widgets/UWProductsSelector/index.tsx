import { useProductsSelectorQuery } from '@/gql/__generated__/types'
import UItemsSelector, { IUItemsSelectorProps } from '@/ui-components/UItemsSelector'
import React, { ComponentProps, useMemo } from 'react'

interface IUWProductsSelectorProps extends Omit<IUItemsSelectorProps, 'optionsToAdd' | 'loading'> {}

const UWProductsSelector: React.FunctionComponent<IUWProductsSelectorProps> = (props) => {
  const productsRequest = useProductsSelectorQuery()
  const productItems = useMemo(
    (): ComponentProps<typeof UItemsSelector>['optionsToAdd'] =>
      productsRequest.data?.products.map((product) => ({
        title: `${product.company?.name || ''}, ${product.name}`,
        value: product.id,
        link: `/products/${product.id}`,
        extra: `${product.price} ₽`,
      })) || [],
    [productsRequest.data]
  )

  return <UItemsSelector optionsToAdd={productItems} loading={productsRequest.loading} {...props} />
}

export default UWProductsSelector
