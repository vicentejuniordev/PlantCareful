import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const userAuthMiddle = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;


    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }
    const token = authHeader.split(' ')[1];
    //Decodificar o token para saber o id do usuário
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    
    if (!token) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    
    next();
}