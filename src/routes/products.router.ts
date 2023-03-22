import { Router } from "express"
import getAllProducts from "../controllers/products/getAllProducts"
import getProduct from "../controllers/products/getProduct"
import getProductValidator from "../controllers/products/getProduct.validator"
import postProduct from "../controllers/products/postProduct"
import postProductValidator from "../controllers/products/postProduct.validator"
import putProduct from "../controllers/products/putProduct"
import putProductValidator from "../controllers/products/putProduct.validator"

const productRouter = Router()


productRouter.get("/products/:id", getProductValidator, getProduct)
productRouter.route("/products")
	.get(getAllProducts)
	.post(postProductValidator, postProduct)
	.put(putProductValidator, putProduct)

export default productRouter
