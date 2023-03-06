import Product from "../../models/product"

async function postProduct(response, request, next) {

	try {
		const { name, description, price } = request.body

		const newProduct = await Product.create({
			name, description, price
		})

		return response.status(201).json(newProduct)

	} catch (error) {
		next()
	}
}

export default postProduct
