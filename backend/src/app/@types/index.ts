// User types
export type User = {
    username : string,
    email : string,
    city : string,
    state : string,
    password : string,
    role: 'user' | 'admin'
}