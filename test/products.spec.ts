import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import Product from "../src/models/product"
import sequelize from "../src/sequelize"

chai.use(chaiHttp)
let container
let agent: ChaiHttp.Agent

const firstProduct = {
	name: "CocaCola",
	description: "Rica y refrescante",
	price: 1000.50
}
describe("Having this fixture", () => {
	before(async () => {
		container = (await import("../src/app")).default()
		agent = chai.request.agent(container.app)

		await sequelize.sync({ force: true })
		await Product.create(firstProduct)
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
		it("should return 2 products", (done) => {

			agent.get("/products")
				.end((error, response) => {

					// console.log(err)
					expect(response).to.have.status(200)
					expect(response.body).to.be.an("array").that.has.length(2)
					done()
				})
		})
	})

	describe("GET /products/1", () => {
		it("should return CocaCola", (done) => {
			agent.get("/products/1")
				.end((error, response) => {

					expect(response).to.have.status(200)
					expect(response).to.have.a.property("body")
					expect(response.body).to.be.deep.equal({ id: 1, ...firstProduct })
					done()
				})

		})
	})

	describe("POST /products Fanta", () => {
		it("should return a Fanta with id", (done) => {

			agent.post("/products")
				.send({
					name: "Fanta",
					description: "Rica y divertida",
					price: 250
				})
				.end((error, response) => {
					expect(response).to.have.status(201)
					console.log(response.body)
					// expect(response.doby)
					done()
				})

		})
	})
}) 
