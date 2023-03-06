import { Response } from "express"
import * as Yup from "yup"


async function postProductValidator(request, response: Response, next) {

	const schema = Yup.object({
		name: Yup.string().required(),
		price: Yup.number().required().min(0)
	})

	try {
		await schema.validate(request.body)

	} catch (error) {
		response.status(422).json(error)
	}

	next()
}

export default postProductValidator