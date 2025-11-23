import type { Request, Response } from "express";
import type { User } from "../../@types/index.js";
import { create } from "../../database/providers/users/create-provider.js";
import * as bcrypt from 'bcrypt';

export const userRegisterController = async (req: Request, res: Response) =>{
   const user: User = req.body;

   const passHash = await bcrypt.hash(user.password, 10);
   user.password = passHash;
   const result = await create(user);

   if(result instanceof Error){
      return res.status(400).json({error:{
         message: result.message
      }})
   } else {
      return res.status(201).json(result);
   }
};
