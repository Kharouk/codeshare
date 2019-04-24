/* eslint-disable no-undef */
// This will be our `express/apollo` server
const { GraphQLServer } = require(`graphql-yoga`)
const Query = require(`./resolvers/Query`)
const Mutation = require(`./resolvers/Mutation`)
const db = require(`./db`)

// Creating the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: `backend/schema.graphql`,
    resolvers: {
      Query,
      Mutation
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  })
}

module.exports = createServer
