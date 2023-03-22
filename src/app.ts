import express from "express"
import logger from "morgan"
import { cleanEnv, str } from "envalid"
import swaggerUi from "swagger-ui-express"
import cors from "cors"
import errorHandler from "./middlewares/errorHandler"
import swaggerFile from "./swagger_output.json"
import productRouter from "./routes/products.router"

export const environment = cleanEnv(process.env, {
	NODE_ENV: str({
		default: "development",
		choices: ["development", "test", "production", "staging"]
	}),
})

const appFactory = () => {

	const app = express()


	// if (!environment.isTest) app.use(logger("dev"))
	app.use(logger("dev"))
	app.use(express.json())
	app.use(cors())

	app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))
	app.use(productRouter)

	// 404
	app.use(function (_req, res) {
		res.sendStatus(404)
	})

	app.use((error, _request, response, _next) => {
		errorHandler(error, response)
	})

	return {
		server: app.listen("3000").on("listening", () => console.log("Listening on 3000")),
		app
	}

}

export default appFactory
