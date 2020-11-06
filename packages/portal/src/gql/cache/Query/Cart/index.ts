import { TypedTypePolicies } from '@/gql/__generated__/apollo-helpers'
import { cartItemsVar } from '../../vars/Cart'

const cartItems: TypedTypePolicies['Query']['fields']['cartItems'] = {
  read() {
    return cartItemsVar()
  },
}

const Cart = {
  cartItems,
}

export default Cart
