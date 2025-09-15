import { title } from "process";
import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: 'Product service API',
        description: 'API documentation for the authentication service',
        version: '1.0.0'
    },
    host: "localhost:6002",
    schemes: ["http"],
}

const outputFile = './swagger-output.json';
const endpointsFiles = ["./routes/product.routes.ts"]

swaggerAutogen()(outputFile, endpointsFiles, doc)