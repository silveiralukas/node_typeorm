import { config } from "../database/config/ormconfig";
import { Category } from "../entities/Category";


export class GetAllCategoriesService {
    async execute() {
    const repo = config.getRepository(Category);
    
    const categories = await repo.find();

    return categories;
    }
}