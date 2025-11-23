import type { Request, Response } from "express";
import { listUsers } from "../../database/providers/users/list-providers.js";

export const listUsersControllers = async (req: Request, res : Response) =>{
    const users = await listUsers();

    return res.status(200).json(users);
}