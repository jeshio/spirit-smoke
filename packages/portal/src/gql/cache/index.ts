import { TypedTypePolicies } from '../__generated__/apollo-helpers'
import Company from './Company'
import Product from './Product'
import Feature from './Feature'
import Query from './Query'

export const clientSchemaTypePolicies: TypedTypePolicies = {
  Query: {
    ...Query,
  },
  Company: {
    ...Company,
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
