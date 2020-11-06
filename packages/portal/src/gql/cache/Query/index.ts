import { TypedTypePolicies } from '@/gql/__generated__/apollo-helpers'
import Cart from './Cart'

const fields: TypedTypePolicies['Query']['fields'] = {
  ...Cart,
}

const Query = { fields }

export default Query
