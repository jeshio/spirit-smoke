import express from 'express'
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import './db'

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World!!',
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

app.use(cors())

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath} !`))
