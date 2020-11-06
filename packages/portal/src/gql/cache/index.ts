import { TypedTypePolicies } from '../__generated__/apollo-helpers'
import Product from './Product'
import Query from './Query'

export const clientSchemaTypePolicies: TypedTypePolicies = {
  Query: {
    ...Query,
  },
  Product: {
    ...Product,
  },
  ProductSimple: {
    ...Product,
  },
}
