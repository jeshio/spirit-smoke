import { TypedTypePolicies } from '@/gql/__generated__/apollo-helpers'
import { cartItemsVar } from '../vars/Cart'

const fields: TypedTypePolicies['Product']['fields'] = {
  isInCart: {
    read(_, { readField }) {
      const id = readField<string>('id')
      const item = cartItemsVar().find((cartItem) => cartItem.id === id)
      return id ? item?.count > 0 : null
    },
  },
  cartItem: {
    read(_, { readField }) {
      const id = readField<string>('id')
      return cartItemsVar().find((cartItem) => cartItem.id === id) || null
    },
  },
}

const Product = { fields }

export default Product
