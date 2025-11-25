import type { Request, Response } from "express";
import KnexInstace from "../../database/knex/index.js";
import { TableNames } from "../../database/ETableNames.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


export const loginUser = async (req: Request, res: Response)=>{
    const credentials = req.body;

    if(credentials.email === '' || credentials.password === ''){
        return res.status(400).json({message: 'Email e senha são obrigatórios'});
    }

    const user = await KnexInstace(TableNames.user).select('*').where({email: credentials.email}).first();

    if(!user){
        return res.status(404).json({message: 'Usuário não encontrado'});
    }

    console.log(credentials.password, user.password);

    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

    console.log(isPasswordValid)
    if(isPasswordValid === false){
        return res.status(401).json({message: 'Senha inválida'});
    }

    const token = jwt.sign({id: user.id},process.env.JWT_SECRET as string, {expiresIn: process.env.JWT_EXPIRES as string});
    return res.status(200).json({message: 'Login realizado com sucesso', token });



}