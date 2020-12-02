import { cartItemsVar } from '@/gql/cache/vars/Cart'
import { useCartProductsQuery } from '@/gql/__generated__/types'
import UButton from '@/ui-components/UButton'
import UPrice from '@/ui-components/UPrice'
import { useReactiveVar } from '@apollo/client'
import { keyBy } from 'lodash'
import { useRouter } from 'next/dist/client/router'
import React, { useMemo } from 'react'
import { Root } from './index.styled'

interface IWCartTotalBarProps {}

const ROUTES_WITH_VISIBLE_COMPONENT = ['/cart']

const WCartTotalBar: React.FunctionComponent<IWCartTotalBarProps> = () => {
  const router = useRouter()
  const isVisible = useMemo(() => ROUTES_WITH_VISIBLE_COMPONENT.includes(router.pathname), [router.pathname])
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
    <Root isVisible={isVisible}>
      <div>
        Итого: <UPrice>{totalPrice}</UPrice>
      </div>
      <UButton type="green" fill>
        Оформить
      </UButton>
    </Root>
  )
}

export default WCartTotalBar
