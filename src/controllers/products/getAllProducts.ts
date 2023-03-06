import Product from "../../models/product"


function getAllProducts(request, response, next) {

	try {

		const result = Product.findAll()

		return response.status(200).json(result)

	} catch (error) {
		next()
	}
}

export default getAllProducts