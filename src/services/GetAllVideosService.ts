import { config } from "../database/config/ormconfig";
import { Video } from "../entities/Videos";

export class GetAllVideosService {
    async execute() {
        const repo = config.getRepository(Video);

        const videos = await repo.find({
            relations: ["category"]
        });

        return videos;
    }
}