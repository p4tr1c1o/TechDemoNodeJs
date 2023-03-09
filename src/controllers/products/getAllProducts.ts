import Product from "../../models/product"


async function getAllProducts(request, response, next) {

	try {

		const result = await Product.findAll()

		return response.status(200).json(result)

	} catch (error) {
		next()
	}
}

export default getAllProducts