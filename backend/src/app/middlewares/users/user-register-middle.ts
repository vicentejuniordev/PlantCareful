import type { NextFunction, Request, Response } from "express";
import { User } from "../../schemas/users/user-schema.js";
import { flattenError, ZodError } from "zod";
export const userRegisterMiddle = (req : Request ,res: Response, next: NextFunction) =>{
    try {
        User.parse(req.body);
        next();
    } catch (error) {
        if(error instanceof ZodError){
            const fieldfError = flattenError(error);
            return res.status(400).json(fieldfError.fieldErrors)
        }
    }
};