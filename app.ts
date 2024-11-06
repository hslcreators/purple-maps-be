import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./init/mongodb";
import morgan from "morgan";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

//starting mongoDB
connectToMongoDB();

//cors,morgan, body parser
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Welcome to Purple Maps!");
});

export default app;
