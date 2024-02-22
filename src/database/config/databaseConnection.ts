import "dotenv/config";
import { DataSource } from "typeorm";
import { config } from "./ormconfig";

export class DataBaseConnection {
    private static _connection: DataSource;

    public static async connect() {
        console.log(process.env.TYPEORM_HOST);

        if(!this._connection) {
            this._connection = await config.initialize();
        }
    }

    public static get connection() {
        if(!this._connection) {
            throw new Error("DataBase não inicializada!");
        }

        return this._connection;
    }
}