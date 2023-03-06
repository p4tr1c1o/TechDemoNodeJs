import Product from "../../models/product"


function getProduct(request, response, next) {

	try {

		const result = Product.findOne({
			where: {
				id: request.param.id
			}
		})

		if (!result) return response.sendStatus(404)

		return response.status(200).json(result)

	} catch (error) {
		next()
	}
}

export default getProduct