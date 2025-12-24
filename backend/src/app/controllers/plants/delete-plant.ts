import type { Request, Response } from "express";
import deletePlant from "../../database/providers/plants/delete-provider.js";
import { tr } from "zod/v4/locales";


const deletePlantController = async (req: Request, res: Response) => {
    const plantId = Number(req.params.id);

    const result =await deletePlant(plantId);

    try{
        if(result instanceof Error){
            return res.status(500).json({message: result.message});
        }
        return res.status(200).json({message: 'Planta deletada com sucesso!'});
    }catch(error){
        return res.status(500).json({message: 'Erro no servidor!'});
    }

}

export default deletePlantController;   