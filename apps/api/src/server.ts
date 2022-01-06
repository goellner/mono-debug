import { json, urlencoded } from "body-parser"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import Dummy from "./db/models/Dummy"
export const createServer = () => {
  const app = express()
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` })
    })
    .get("/hello", (req, res) => {
      return res.json({ message: `hello from express!` })
    })
    .get("/dummy", async (req, res) => {
      const dummyData = await Dummy.findAll()
      return res.json(dummyData)
    })
    .get("/healthz", (req, res) => {
      return res.json({ ok: true })
    })

  return app
}
