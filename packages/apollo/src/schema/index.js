import { gql } from 'apollo-server-express'
import { readdirSync, readFileSync } from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

const typeDefs = []
const resolvers = []
const moduleDirs = readdirSync(__dirname, { withFileTypes: true })
  .filter((moduleDir) => moduleDir.isDirectory())
  .map((dirent) => dirent.name)

// @ts-ignore
moduleDirs.forEach((moduleDir) => {
  const files = readdirSync(`${__dirname}/${moduleDir}`, { withFileTypes: true })
  files.forEach((file) => {
    const [, extension] = file.name.split('.')
    switch (extension) {
      case 'gql': {
        const schema = readFileSync(`${__dirname}/${moduleDir}/schema.gql`, { encoding: 'utf8' })

        typeDefs.push(
          gql`
            ${schema}
          `,
        )
        break
      }
      case 'js':
        // eslint-disable-next-line import/no-dynamic-require, global-require
        resolvers.push(require(`${__dirname}/${moduleDir}/resolvers.js`).default)
        break
      default:
        break
    }
  })
})

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

typeDefs.unshift(linkSchema)

const mergedResolvers = merge(...resolvers)

const schema = makeExecutableSchema({
  typeDefs,
  // @ts-ignore
  resolvers: mergedResolvers,
  inheritResolversFromInterfaces: true,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})

export { mergedResolvers }

export default schema
