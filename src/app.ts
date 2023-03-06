import express from "express"
import logger from "morgan"
import { cleanEnv, str } from "envalid"
import ErrorHandler from "./middlewares/errorHandler"
import cors from "cors"

export const environment = cleanEnv(process.env, {
	NODE_ENV: str({
		default: "development",
		choices: ["development", "test", "production", "staging"]
	}),
})

const app = express()


if (!environment.isTest) app.use(logger("dev"))

app.use(express.json())
app.use(cors())


app.use(ErrorHandler)


export default app
