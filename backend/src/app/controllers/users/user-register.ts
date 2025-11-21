import type { Request, Response } from "express";
import type { User } from "../../@types/index.js";
import { create } from "../../database/providers/users/create-provider.js";

export const userRegisterController = async (req: Request, res: Response) =>{
   const user: User = req.body;

   const result = await create(user);

   console.log(result)
};
