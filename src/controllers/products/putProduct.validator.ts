import { Response } from "express"
import * as Yup from "yup"


async function putProductValidator(request, response: Response, next) {

	const schema = Yup.object({
		id: Yup.number().required(),
		name: Yup.string(),
		price: Yup.number().min(0)
	})

	try {
		await schema.validate(request.body)

	} catch (error) {
		response.status(422).json(error)
	}

	next()
}

export default putProductValidator