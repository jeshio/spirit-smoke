import isServer from '@/helpers/isServer'
import { attempt } from 'lodash'
import { ICartItem } from './types'

const CART_ITEMS_LOCAL_STORAGE_KEY = 'cartItems'

export const getCartItems = () => {
  if (isServer()) return []

  const cartItems = attempt(JSON.parse, localStorage.getItem(CART_ITEMS_LOCAL_STORAGE_KEY))

  if (Array.isArray(cartItems)) return cartItems

  return []
}

export const saveCartItems = (cartItems: ICartItem[]) =>
  localStorage.setItem(CART_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
