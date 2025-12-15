import * as z from 'zod';

export const Plant = z.object({
    name: z.string().min(2, 'O nome da planta deve ter pelo menos 2 caracteres'),
    species: z.string().min(3, 'A espécie da planta deve ter pelo menos 3 caracteres'),
    wateringFrequency: z.number().min(1, 'A frequência de rega deve ser no mínimo 1 dia'),
});

export type PlantSchema = z.infer<typeof Plant>;