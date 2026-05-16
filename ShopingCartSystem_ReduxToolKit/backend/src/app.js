import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import morgan from 'morgan';
import authRoute from '../routes/authRoute.js';
import swaggerUi from 'swagger-ui-express'
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json())
app.use(morgan("dev"))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerFile = JSON.parse(
    fs.readFileSync(
        path.join(__dirname, "../swagger/swagger-output.json"),
        "utf-8"
    )
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/api/auth", authRoute);

export default app;