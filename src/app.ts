import express from "express"
import logger from "morgan"
import { cleanEnv, str } from "envalid"
// import swaggerUi from "swagger-ui-express"
import cors from "cors"
// import ErrorHandler from "./middlewares/errorHandler"
// import swaggerFile from "./swagger_output.json"
// import productRouter from "./routes/products.router"

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

// app.use("/auth/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))
// app.use(productRouter)

// 404
app.use(function (req, res, next) {
	const error = new Error("Not Fommmmund")
	res.status(404).json(error)
})

// app.use(ErrorHandler)


export default app
