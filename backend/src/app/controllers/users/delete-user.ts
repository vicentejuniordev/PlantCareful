import type { Request, Response } from "express";
import { deleteUser } from "../../database/providers/users/delete-provider.js";

export const deleteUserController = (req: Request, res : Response ) =>{
    const id = Number(req.user.id);

    console.log(req.user.id);
    
    const isDeleted = deleteUser(id);

    if(isDeleted instanceof Error){
        return res.status(400).json({
            message: isDeleted.message
        });
    }

    return res.status(200).json({
        message: 'Usuário deletado com sucesso'
    });
}