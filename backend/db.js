// eslint-disable-next-line no-undef
const { Prisma } = require(`prisma-binding`)

// this file connects to the remote prisma DB  and gives us the ability to query it with JS

const db = new Prisma({
  typeDefs: `generated/prisma-client/prisma-scheme.js`,
  // eslint-disable-next-line no-undef
  endpoint: process.env.LOCALHOST_URL,
  // eslint-disable-next-line no-undef
  secret: process.env.PRISMA_SECRET,
  debug: true
})

module.exports = db
