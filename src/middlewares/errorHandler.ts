import { environment } from "../app"


export function ErrorHandler(error, request, response, next) {

	if (!environment.isTest) console.error(error.stack)

	response.status(500)
	response.send("Internal Server Error")
}

export default ErrorHandler


