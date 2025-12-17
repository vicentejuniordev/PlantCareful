import type { Request, Response } from "express";
import { createPlant } from "../../database/providers/plants/create-provider.js";


export const createPlantController = async (req: Request, res: Response) =>{
    console.log('test')
    const body = req.body;
    console.log(body)
    const userId = Number(req.user.id);
    body.user_id = userId;

    const result = await createPlant(body);

    if(result instanceof Error){
        return res.status(400).json({error:{
            message: result.message
        }})
    } else {
        return res.status(201).json({message: "Planta cadastrada com sucesso!", plant: result});
    }

};