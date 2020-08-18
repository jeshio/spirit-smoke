import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import models from './db/models'

const server = new ApolloServer({
  schema,
  formatError: (error) => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '')

    return {
      ...error,
      message,
    }
  },
  context: async () => ({
    models,
    sequelize: models.sequelize,
  }),
})

const app = express()

app.use(cors())

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}!`))