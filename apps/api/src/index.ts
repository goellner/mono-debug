import { createServer } from "./server"
import { log } from "logger"
import dbInit from "./db/init"
import dotenv from "dotenv"
dotenv.config()

dbInit()

const port = process.env.PORT || 5600
const server = createServer()

server.listen(port, () => {
  log(`api running on ${port}`)
})
