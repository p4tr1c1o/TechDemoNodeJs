import Product from "../../models/product"


const getAllProducts = async (request, response, next) => {
	try {

		const result = await Product.findAll()
		return response.status(200).json(result)

	} catch (error) {
		return next(error)
	}
}

export default getAllProducts