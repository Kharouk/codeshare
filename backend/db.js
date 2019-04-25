// eslint-disable-next-line no-undef
const { Prisma } = require(`prisma-binding`)

// this file connects to the remote prisma DB  and gives us the ability to query it with JS

const db = new Prisma({
  typeDefs: `backend/schema.graphql`,
  // eslint-disable-next-line no-undef
  endpoint: `http://localhost:4466`,
  // eslint-disable-next-line no-undef
  secret: process.env.PRISMA_SECRET,
  debug: true
})

module.exports = db
