import Product from "../../models/product"

async function postProduct(request, response, next) {

	try {
		const { name, description, price } = request.body

		const newProduct = await Product.create({
			name, description, price
		})

		return response.status(201).json(newProduct)

	} catch (error) {
		next(error)
	}
}

export default postProduct
