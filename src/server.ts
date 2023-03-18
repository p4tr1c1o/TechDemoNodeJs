import app from "./app"
import dotenv from "dotenv"
import sequelize from "./sequelize"
import Product from "./models/product"

dotenv.config()

await sequelize.sync({ force: true })
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

const server = app.listen("3000", () => console.log("Listening on 3000"))

export default server
