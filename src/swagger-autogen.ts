import swaggerAutogen from "swagger-autogen"

const outputFile = "./swagger_output.json"
const endpointsFiles = [
	"./src/routes/info.router.ts",
]

swaggerAutogen(outputFile, endpointsFiles)