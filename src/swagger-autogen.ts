import swaggerAutogen from "swagger-autogen"

const outputFile = "./swagger_output.json"
const endpointsFiles = [
	"./src/routes/products.router.ts",
]

swaggerAutogen(outputFile, endpointsFiles)