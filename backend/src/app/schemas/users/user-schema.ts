import * as z from 'zod';

export const User = z.object({
    username: z.string(),
    email: z.email(),
    city : z.string().min(4),
    state : z.string().min(2),
    password: z.string().min(6).max(10)
});
