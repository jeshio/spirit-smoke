import { gql } from 'apollo-server-express'

const schema = gql`
  type Query {
    products: [Product!]
    product(id: ID!): Product
  }
 
  type Mutation {
    createProduct(name: String!, price: Int!, productCategoryId: ID!): Product!
    createProductCategory(name: String!): ProductCategory!
  }
 
  type Product {
    id: ID!
    name: String!
    price: Int!
    productCategoryName: String!
    productCategoryId: ID!
  }

  type ProductCategory {
    id: ID!
    name: String!
    products: [Product]!
  }
`

export default schema
