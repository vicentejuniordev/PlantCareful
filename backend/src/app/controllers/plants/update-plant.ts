import type { Request, Response } from "express";
import upddatePlantProvider from "../../database/providers/plants/update-provider.js";

const updatePlant = async (req: Request, res: Response) =>{
    const plantid = Number(req.params.id);

    const updatedData = req.body;

    const result = await upddatePlantProvider(plantid, updatedData);

    if(result instanceof Error){
        return res.status(400).json({error: result.message})
    }
    
    return res.status(200).json({message: "Planta aualizada com sucesso..."})
}

export default updatePlant