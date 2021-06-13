import express from 'express'
import cors from 'cors'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'

import schema, { mergedResolvers } from './schema'
import * as loadersCreator from './loaders'
import models from './db/models'

const { AUTH_TOKEN, CORS_DOMAINS } = process.env

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
      try {
        const [, fieldName] = new RegExp(/is on ([^\s]+) failed/).exec(error.message)
        message = `Некорректно заполнено поле ${fieldName}`
      } catch (e) {

      }
    }

    return {
      ...error,
      message,
    }
  },
  context: async ({ req }) => {
    const token = req.headers.authorization || ''

    if (token !== `Bearer ${AUTH_TOKEN}`) throw new AuthenticationError('Кто ты?')

    return ({
      models,
      loaders: createLoaders(),
      sequelize: models.sequelize,
      mergedResolvers,
    })
  },
})

const corsOptions = {
  origin: `${CORS_DOMAINS}`.split(','),
  credentials: true,
}

const app = express()

app.use(cors(corsOptions))

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}!`))
