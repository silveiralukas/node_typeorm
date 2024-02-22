import { config } from "../database/config/ormconfig";
import { Category } from "../entities/Category";
import { Video } from "../entities/Videos";

type VideoRequest = {
    name: string;
    description: string;
    category_id: string;
}

export class CreateVideoService {
    async execute({name, description, category_id}: VideoRequest): Promise<Error | Video> {
        const repo = config.getRepository(Video);

        const video = repo.create({name, description, category_id});

        await repo.save(video);

        return video;
    }
}