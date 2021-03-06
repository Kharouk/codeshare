require(`dotenv`).config({ path: `../.env` })
const createServer = require(`./createServer`)
const db = require(`./db`)

const server = createServer()

// TODO Use express middleware to handle cookies
// TODO Use express middleware to populate current user
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.LOCALHOST_URL
    }
  },
  details => {
    console.log(
      `Server is now running on port http://localhost:${details.port}`
    )
  }
)
