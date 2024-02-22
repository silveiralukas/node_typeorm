import { config } from "../database/config/ormconfig";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUpdateRequest) {
        const repo = config.getRepository(Category);

        const category = await repo.findOneBy({ id });

        if(!category) {
            return new Error("A categoria não existe!")
        }

        //se tiver algo dentro retorna pra não retornar vazio
        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repo.save(category);

        return category;
    }
}