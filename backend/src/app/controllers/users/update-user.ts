import type { Request, Response } from "express";
import { updateUser } from "../../database/providers/users/update-user-provider.js";


export const updateUserController = async (req: Request, res : Response) =>{
        const data = req.body;
        const userId = Number(req.user.id);
        const userIdParam = Number(req.params.id);

        const isUpdated = await updateUser(userId || userIdParam, data);
        if(isUpdated instanceof Error){
            return res.status(400).json({message: isUpdated.message});
        }

        return res.status(200).json({message: 'Usuário atualizado com sucesso'});
}
