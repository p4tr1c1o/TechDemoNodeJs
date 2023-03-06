import app from "./app"
import dotenv from "dotenv"
import sequelize from "./sequelize"

dotenv.config()

// HACK: esto es por que el target de compilacion no permite Top-Level Await
const sync = async () => await sequelize.sync({ force: true })
sync().then()

const server = app.listen("3000", () => console.log("Listening on 3000"))

export default server
