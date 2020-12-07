import { cartItemsVar, clearCart } from '@/gql/cache/vars/Cart'
import { useCartProductsQuery } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import UPrice from '@/ui-components/UPrice'
import { useReactiveVar } from '@apollo/client'
import { keyBy } from 'lodash'
import { useRouter } from 'next/dist/client/router'
import React, { useMemo } from 'react'
import { Root, Text } from './index.styled'

interface IWCartTotalBarProps {}

const ROUTES_WITH_VISIBLE_COMPONENT = ['/cart', '/checkout']
const ROUTE_WITH_MAKE_ORDER_BUTTON = '/checkout'

const WCartTotalBar: React.FunctionComponent<IWCartTotalBarProps> = () => {
  const { pathname, push } = useRouter()
  const isVisible = useMemo(() => ROUTES_WITH_VISIBLE_COMPONENT.includes(pathname), [pathname])
  const withMakeOrderButton = useMemo(() => pathname === ROUTE_WITH_MAKE_ORDER_BUTTON, [pathname])
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
  const handleMakeOrder = () => {
    // TODO: запрос на создание заказа
    clearCart()
    push('/checkout/success')
  }

  return (
    <Root isVisible={isVisible}>
      <Text>
        {/* Добавить лоадер цены при изменении количества товаров (реактивная переменная) */}
        Итого: <UPrice>{totalPrice}</UPrice>
      </Text>
      {withMakeOrderButton ? (
        <UButton type="primary" fill onClick={handleMakeOrder}>
          Завершить
        </UButton>
      ) : (
        <UButton type="green" fill href="/checkout">
          Оформить
        </UButton>
      )}
    </Root>
  )
}

export default WCartTotalBar
