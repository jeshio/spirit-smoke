import isServer from '@/helpers/isServer'
import { makeVar } from '@apollo/client'
import { getCartItems } from './localStorage'
import { ICartItem } from './types'

const getInitialCartItems = () => {
  if (isServer()) return []

  return getCartItems()
}

export const cartItemsVar = makeVar<ICartItem[]>(getInitialCartItems())

export * from './mutations'
