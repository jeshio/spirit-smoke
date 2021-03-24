import { ProductsSelectorFragment, useProductsSelectorQuery } from '@/gql/__generated__/types'
import UItemsSelector, { IUItemsSelectorProps, UItemsSelectorValueObjectType } from '@/ui-components/UItemsSelector'
import { keyBy } from 'lodash'
import React, { ComponentProps, useCallback, useMemo } from 'react'

interface IUWProductsSelectorProps extends Omit<IUItemsSelectorProps, 'onChange' | 'optionsToAdd' | 'loading'> {
  onChange: (
    value: Array<
      UItemsSelectorValueObjectType & {
        product: ProductsSelectorFragment
      }
    >
  ) => void
}

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
  const productsById = useMemo(() => keyBy(productsRequest.data?.products, 'id'), [productsRequest.data?.products])
  const handleChange: IUItemsSelectorProps['onChange'] = useCallback(
    (items) =>
      props.onChange?.(
        (items as UItemsSelectorValueObjectType[]).map((item) => ({
          ...item,
          product: productsById[item?.id],
        }))
      ),
    [props.onChange, productsById]
  )

  return (
    <UItemsSelector optionsToAdd={productItems} loading={productsRequest.loading} {...props} onChange={handleChange} />
  )
}

export default UWProductsSelector
