import Product from "../../models/product"


async function getProduct(request, response, next) {

	try {

		const result = await Product.findOne({
			where: {
				id: request.params.id
			}
		})

		if (!result) return response.sendStatus(404)

		return response.status(200).json(result)

	} catch (error) {
		next(error)
	}
}

export default getProduct