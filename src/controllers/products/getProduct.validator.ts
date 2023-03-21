import { Response } from "express"
import * as Yup from "yup"


async function getProductValidator(request, response: Response, next) {

	const schema = Yup.object({
		id: Yup.number().required().moreThan(0),
	})

	try {
		await schema.validate(request.params)

	} catch (error) {
		response.status(422).json(error)
	}

	next()
}

export default getProductValidator