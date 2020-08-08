import { gql } from 'apollo-server-express'

const schema = gql`
  type Query {
    products: [Product!]
    product(id: ID!): Product
    productCategories: [ProductCategory!]
    productCategory(id: ID!): ProductCategory
  }
 
  type Mutation {
    createProduct(name: String!, slug: String!, price: Float!, productCategoryId: ID!, count: Int!): Product!
    createProductCategory(name: String!, slug: String!, description: String!): ProductCategory!
  }
 
  type Product {
    id: ID!
    name: String!
    price: Float!
    count: Int!
    productCategoryName: String!
    productCategoryId: ID!
  }

  type ProductCategory {
    id: ID!
    name: String!
    slug: String!
    description: String!
    products: [Product!]
  }
`

export default schema
