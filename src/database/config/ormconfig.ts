import "dotenv/config";
import { DataSource } from "typeorm";

export const config = new DataSource({
    type: 'postgres',
    url: process.env.TYPEORM_HOST,
    logging: false,
    synchronize: false,
    entities: ['src/entities/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
    ssl: {
        rejectUnauthorized: false,
    }
})