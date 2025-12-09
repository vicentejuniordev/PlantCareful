import jwt from 'jsonwebtoken';

const generateRefreshToken = (user: { id: string }) => {
    const refreshToken = jwt.sign({id: user.id},process.env.JWT_REFRESH_SECRET as string, {expiresIn: process.env.JWT_REFRESH_EXPIRES as string});     
    return refreshToken;   
}

export default generateRefreshToken;