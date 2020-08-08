import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import resolvers from './resolvers'
import models from './db/models'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
  },
})

const app = express()

app.use(cors())

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}!`))
