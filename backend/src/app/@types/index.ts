// User types
export type User = {
    username : string,
    email : string,
    city : string,
    state : string,
    password : string,
    role: 'user' | 'admin'
}

export type Plant ={
    name: string,
    species: string,
    wateringFrequency: number,
    planted_at: Date,
    user_id: number
}