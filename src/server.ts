import "reflect-metadata";
import express from "express";
import { DataBaseConnection } from "./database/config/databaseConnection";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

DataBaseConnection.connect().then(() => {
    console.log("DataBase Inicializada!");
    app.listen(3000, () => console.log("Server is running!"))});

