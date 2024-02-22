import { Category } from "../entities/Category";
import { config } from "../database/config/ormconfig";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({ name, description }:CategoryRequest): Promise<Category> {
        const repo = config.getRepository(Category);

        const category = repo.create({
            name,
            description
        })

        await repo.save(category);

        return category;
    }
}