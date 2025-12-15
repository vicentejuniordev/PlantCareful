import type { Request, Response } from "express";
import { updateUser } from "../../database/providers/users/update-user-provider.js";

const adminUpdateUser = async (req: Request, res: Response) =>{
    const { userId } = req.params;
    

    const result = await updateUser(Number(userId), req.body);

    if(result instanceof Error){
        return res.status(400).json({ message: result.message });
    }

    return res.status(200).json({ message: 'Usuário atualizado com sucesso' });



};

export default adminUpdateUser;