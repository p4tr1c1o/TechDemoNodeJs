import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import server from "../src/server"
import Product from "../src/models/product"

chai.use(chaiHttp)

describe("Having this fixture", () => {

	Product.create({
		name: "CocaCola",
		description: "Rica y refrescante",
		price: 1000.50
	})
	Product.create({
		name: "Agua Mineral",
		description: "Mas Rica y refrescante",
		price: 250.00
	})

	describe("GET /products", () => {
		it("should return 2 or more products", () => {

			chai.request(server)
				.get("/products")
				.end((err, res) => {
					console.log(res)
					expect(res).to.have.status(200)

					// expect(res.body).to.be.an("array")
					// expect(res.body).to.have.length(3)
				})
		})
	})
}) 
