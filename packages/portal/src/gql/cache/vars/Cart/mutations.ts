import { cloneDeep } from 'lodash'
import { cartItemsVar } from '.'
import { saveCartItems } from './localStorage'
import { ICartItem } from './types'

export const addCartItem = (cartItem: ICartItem) => {
  const currentCartItems = cartItemsVar()
  const newCartItems = [...currentCartItems.filter((currentCartItem) => currentCartItem.id !== cartItem.id), cartItem]
  cartItemsVar(newCartItems)
  saveCartItems(newCartItems)
}

export const changeCartItemCount = (cartItemId: string, newCount: number) => {
  const currentCartItems = cartItemsVar()
  let result

  if (newCount < 1) {
    result = currentCartItems.filter((cartItem) => cartItem.id !== cartItemId)
  } else {
    const cartItemIndex = currentCartItems.findIndex((cartItem) => cartItem.id === cartItemId)

    if (cartItemIndex < 0) return

    result = cloneDeep(currentCartItems)
    result[cartItemIndex].count = newCount
  }

  cartItemsVar(result)
  saveCartItems(result)
}
