import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express"
import swaggerFile from "../../../swagger.json";
import "express-async-errors";

import "../typeorm"
import "../../container"

import { AppError } from "../../errors/AppError";

const app = express();

app.use(express.json());

app.use(router);

//necessária seguinte instalação: npm i express-async-errors
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
    
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3333, () => {console.log('Server is running')});