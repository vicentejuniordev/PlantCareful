import jwt from 'jsonwebtoken';

const generateRefreshToken = (user: { id: string }) => {
    const refreshToken = jwt.sign({id: user.id},process.env.JWT_SECRET as string, {expiresIn: '7d'});     
    return refreshToken;   
}

export default generateRefreshToken;