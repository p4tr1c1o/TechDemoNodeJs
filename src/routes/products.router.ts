import { Router } from "express"
import getAllProducts from "../controllers/products/getAllProducts"
// import getProduct from "../controllers/products/getProduct"
// import postProduct from "../controllers/products/postProduct"
// import postProductValidator from "../controllers/products/postProduct.validator"

const productRouter = Router()

productRouter.get("/products", getAllProducts)
// productRouter.get("/products/:id", getProduct)
// productRouter.post("/productxxs", postProductValidator, postProduct)

export default productRouter
