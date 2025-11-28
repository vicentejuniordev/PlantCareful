import type { NextFunction, Request, Response } from "express";

export const userAuthMiddle = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }
    const token = authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    
    next();
}