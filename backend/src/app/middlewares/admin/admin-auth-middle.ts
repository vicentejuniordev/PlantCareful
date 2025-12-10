import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";;

const adminAuthMiddle = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1];


    if (!token) {
        return res.status(401).json({ message: 'Token inválido' });
    }

    try {
        //Decodificar o token para saber o id do usuário
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: 'Token expirado' });
        }
    }


    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Acesso negado: privilégios de administrador necessários' });
    }


    next();
}

export { adminAuthMiddle };