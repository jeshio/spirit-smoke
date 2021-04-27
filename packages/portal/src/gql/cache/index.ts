import { TypedTypePolicies } from '../__generated__/apollo-helpers'
import ProductLine from './ProductLine'
import Product from './Product'
import Feature from './Feature'
import Query from './Query'

export const clientSchemaTypePolicies: TypedTypePolicies = {
  Query: {
    ...Query,
  },
  ProductLine: {
    ...ProductLine,
  },
  Product: {
    ...Product,
  },
  Feature: {
    ...Feature,
  },
  ProductSimple: {
    ...Product,
  },
}
