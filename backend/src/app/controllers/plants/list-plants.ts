import type { Request, Response } from "express";
import listPlantsProvider from "../../database/providers/plants/list-provider.js";

export const listPlantController = async (req: Request, res: Response) =>{
    const userId = Number(req.user.id);

    try{
        const plants = await listPlantsProvider(userId);

        if(!Array.isArray(plants) || plants.length === 0){
            return res.status(404).json({message: 'Nenhuma planta encontrada!'});
        }
        return res.status(200).json(plants);

        
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Erro ao listar plantas!'});
    }
}