import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

import schema from './schema'
import * as loadersCreator from './loaders'
import models from './db/models'

const createLoaders = () => Object.keys(loadersCreator).reduce(
  (base, key) => ({
    ...base,
    /* eslint-disable-next-line import/namespace */
    [key]: loadersCreator[key](models),
  }),
  {},
)

const server = new ApolloServer({
  schema,
  formatError: (error) => {
    // remove the internal sequelize error message
    // leave only the important validation error
    let message = error.message
      .replace('SequelizeValidationError: ', '')

    if (message.includes('Validation error: ')) {
      const [, fieldName] = new RegExp(/is on ([^\s]+) failed/).exec(error.message)
      message = `Некорректно заполнено поле ${fieldName}`
    }

    return {
      ...error,
      message,
    }
  },
  context: async () => ({
    models,
    loaders: createLoaders(),
    sequelize: models.sequelize,
  }),
})

const app = express()

app.use(cors())

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}!`))
