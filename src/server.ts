import app from "./app"
import dotenv from "dotenv"
import sequelize from "./sequelize"
import Product from "./models/product"

dotenv.config()

// Hack: esto es por que el target de compilacion no permite Top-Level Await
const sync = async () => await sequelize.sync({ force: true })
sync().then(
	() => {
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
	}
)


const server = app().server

export default server
