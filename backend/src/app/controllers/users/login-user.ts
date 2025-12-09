import type { Request, Response } from "express";
import KnexInstace from "../../database/knex/index.js";
import { TableNames } from "../../database/ETableNames.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import generateToken from "../../services/Auth/generate-token.js";
import generateRefreshToken from "../../services/Auth/generate-refresh-token.js";


export const loginUser = async (req: Request, res: Response)=>{
    const credentials = req.body;

    if(credentials.email === '' || credentials.password === ''){
        return res.status(400).json({message: 'Email e senha são obrigatórios'});
    }

    const user = await KnexInstace(TableNames.user).select('*').where({email: credentials.email}).first();

    if(!user){
        return res.status(404).json({message: 'Usuário não encontrado'});
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

    if(isPasswordValid === false){
        return res.status(401).json({message: 'Senha inválida'});
    }

    const token = generateToken({id: user.id});
    const refreshToken = generateRefreshToken({id: user.id});

    await KnexInstace(TableNames.user).update({refresh_token: refreshToken}).where({id: user.id});


    return res.status(200).json({message: 'Login realizado com sucesso', token, refreshToken });



}