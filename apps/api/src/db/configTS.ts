import { Dialect, Sequelize } from "sequelize"
import * as dotenv from "dotenv"
dotenv.config()

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  dialectOptions: {
    // Good charset for emojis
    charset: "utf8mb4",
    // Return actual decimal numbers instead of strings
    // https://github.com/sequelize/sequelize/issues/8019
    decimalNumbers: true,
  },
  logging: process.env.SEQUELIZE_LOGGING === "true",
})

export default sequelizeConnection
