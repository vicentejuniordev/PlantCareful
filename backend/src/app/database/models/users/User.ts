
export interface User {
    id:number,
    username : string,
    email : string,
    city : string,
    state : string,
    password : string,
    refreshToken?: string,
    role: 'user' | 'admin'
}