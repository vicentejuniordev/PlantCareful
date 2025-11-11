import * as z from 'zod';

export const User = z.object({
    username: z.string().min(4, 'O nome deve ter pelo menos 4 caracteres'),
    email: z.email('Email inválido'),
    city : z.string().min(4,'A cidade deve ter no mínimo 4 caracteres'),
    state : z.string().min(2, 'O Estado deve ter pelo menos dois caracteres'),
    password: z.string().min(6,'A senha deve ter pelo menos 6 caractres').max(10, 'A senha deve ter no máximo 4 caracteres')
});

export type UserSchema = z.infer<typeof User>;
