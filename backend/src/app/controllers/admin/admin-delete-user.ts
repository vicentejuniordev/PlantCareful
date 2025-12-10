import type { Request, Response } from "express";
import { deleteUser } from "../../database/providers/users/delete-provider.js";

const adminDeletesUser = async (req: Request, res: Response)=>{
    const { id } = req.params;

    const result = await deleteUser(Number(id));

    if(result instanceof Error){
        return res.status(400).json({ message: result.message });
    }

    return res.status(200).json({ message: 'Usuário deletado com sucesso' });


}

export default adminDeletesUser;