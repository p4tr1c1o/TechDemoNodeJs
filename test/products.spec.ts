import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import server from "../src/server"

chai.use(chaiHttp)

describe("Having this fixture", () => {

	describe("GET /products", () => {
		it("should return 2 or more products", () => {

			chai.request(server)
				.get("/products")
				.end((err, res) => {
					expect(res).to.have.status(200)
					console.log(res)

					// expect(res.body).to.be.an("array")
					// expect(res.body).to.have.length(3)
				})
		})
	})
}) 
