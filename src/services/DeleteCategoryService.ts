import { config } from "../database/config/ormconfig";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string) {
        const repo = config.getRepository(Category);

        await repo.delete(id);
    }
}