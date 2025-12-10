import jwt from 'jsonwebtoken';

const generateToken = (user: { id: string, role: 'user' | 'admin' }) => {
    const token = jwt.sign({id: user.id, role: user.role},process.env.JWT_SECRET as string, {expiresIn: process.env.JWT_EXPIRES as string});     
    return token;   
}

export default generateToken;
