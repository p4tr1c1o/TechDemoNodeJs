import { Router } from "express"
import getAllProducts from "../controllers/products/getAllProducts"
import getProduct from "../controllers/products/getProduct"
import postProduct from "../controllers/products/postProduct"
import postProductValidator from "../controllers/products/postProduct.validator"

const router = Router()

router.route("/products")
router.get("/", getAllProducts)
router.get("/:id", getProduct)
router.post("/", postProductValidator, postProduct)

export default router
