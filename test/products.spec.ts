import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import Product from "../src/models/product"
import sequelize from "../src/sequelize"

chai.use(chaiHttp)
let container, agent
describe("Having this fixture", () => {
	before(async () => {
		container = (await import("../src/app")).default()
		agent = chai.request.agent(container.app)

		await sequelize.sync({ force: true })
		await Product.create({
			name: "CocaCola",
			description: "Rica y refrescante",
			price: 1000.50
		})
		await Product.create({
			name: "Agua Mineral",
			description: "Mas Rica y refrescante",
			price: 250.00
		})

	})

	after(async () => {
		container.server.close(() => {
			console.log("Http server closed")
		})
	})

	describe("GET /products", () => {
		it("should return 2 or more products", (done) => {

			agent.get("/products")
				.end((err, res) => {

					// console.log(err)
					expect(res).to.have.status(200)
					expect(res.body).to.be.an("array")
					expect(res.body).to.have.length(2)
					done()
				})
		})
	})
}) 
