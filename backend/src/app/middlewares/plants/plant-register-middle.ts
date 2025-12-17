import type { NextFunction, Request, Response } from "express";
import { Plant } from "../../schemas/plants/plants-schema.js";
import { flattenError, ZodError } from "zod";

export const plantRegisterMiddle = (req: Request, res: Response, next: NextFunction)=>{
    try {
        Plant.parse(req.body);
        next();
    } catch (error) {
        if(error instanceof ZodError){
            const fieldErrors = flattenError(error);
            return res.status(400).json(fieldErrors.fieldErrors)
        }
    }
}