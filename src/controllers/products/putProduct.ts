import { Response } from "express"
import Product from "../../models/product"

async function putProduct(request, response: Response, next) {

	try {
		const productModel = request.body

		const product = await Product.findByPk(productModel.id)
		if (!product) return response.status(404).send("product not found")

		const mergedProduct = Object.assign({}, product.dataValues, productModel)

		await product?.update(mergedProduct)

		return response.status(200).json(product)

	} catch (error) {
		next(error)
	}
}

export default putProduct
