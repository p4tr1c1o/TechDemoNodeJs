import app from "./app"
import dotenv from "dotenv"

dotenv.config()

// Hack: esto es por que el target de compilacion no permite Top-Level Await
// const sync = async () => await sequelize.sync()
// sync().then()

const server = app.listen("3000", () => console.log("Listening on 3000"))

export default server
