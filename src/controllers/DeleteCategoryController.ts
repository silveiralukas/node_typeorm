import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteCategoryService();

        await service.execute(id);

        return res.status(200).json("Categoria deletada com sucesso!");
    }
}