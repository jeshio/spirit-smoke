import { cartItemsVar } from '@/gql/cache/vars/Cart'
import { useCartProductsQuery } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import UPrice from '@/ui-components/UPrice'
import { useReactiveVar } from '@apollo/client'
import { keyBy } from 'lodash'
import React, { useMemo } from 'react'
import { Root, Text } from './index.styled'
import { IWCartTotalBarProps } from './types'

const WCartTotalBar: React.FunctionComponent<IWCartTotalBarProps> = ({ isOrderCreator, isLoading, isDisabled }) => {
  const cartItems = useReactiveVar(cartItemsVar)
  const cartItemIds = useMemo(() => cartItems.map(({ id }) => id), [cartItems])
  const cartItemsById = useMemo(() => keyBy(cartItems, 'id'), [cartItems])
  const cartItemsRequest = useCartProductsQuery({
    variables: {
      productIds: cartItemIds,
    },
    // skip: !isVisible,
  })
  const totalPrice = useMemo(
    () =>
      cartItemsRequest.data?.productsByIds.reduce(
        (base, item) => base + item.price * cartItemsById[item.id].productsCount,
        0
      ) || 0,
    [cartItemsRequest.data, cartItemsById]
  )

  return (
    <Root isVisible>
      <Text>
        {/* Добавить лоадер цены при изменении количества товаров (реактивная переменная) */}
        Итого: <UPrice>{totalPrice}</UPrice>
      </Text>
      {isOrderCreator ? (
        <UButton type="primary" isSubmit fill disabled={isLoading || isDisabled}>
          Завершить
        </UButton>
      ) : (
        <UButton type="green" fill href="/checkout" disabled={isDisabled}>
          Оформить
        </UButton>
      )}
    </Root>
  )
}

export default WCartTotalBar
