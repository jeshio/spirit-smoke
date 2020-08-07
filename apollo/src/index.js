import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import resolvers from './resolvers'
import models, { sequelize } from './models'

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

sequelize.sync().then(async () => {
  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}!`))
})
