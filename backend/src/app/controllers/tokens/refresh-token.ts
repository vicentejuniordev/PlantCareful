import { TableNames } from '../../database/ETableNames.js';
import KnexInstace from '../../database/knex/index.js';
import jwt from 'jsonwebtoken';
import generateToken from '../../services/tokens/generate-token.js';
import generateRefreshToken from '../../services/tokens/generate-refresh-token.js';
import type { Request, Response } from 'express';

const refreshToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
        return res.status(400).json({ message: 'Refresh token não fornecido' });
    }

    try {
        const decoded =  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as { id: string };

        const newToken = generateToken({ id: decoded.id });
        const newRefreshToken = generateRefreshToken({ id: decoded.id });

        // Atualizar o refresh token no banco de dados
        await KnexInstace(TableNames.user).update({ refresh_token: newRefreshToken }).where({ id: decoded.id });

        return res.status(200).json({ token: newToken, refreshToken: newRefreshToken });
    } catch (error) {
        return res.status(401).json({ message: 'Refresh token inválido ou expirado' });
    }
    
};
export default refreshToken;