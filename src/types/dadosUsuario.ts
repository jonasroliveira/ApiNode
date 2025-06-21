import { z } from 'zod';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

export const DadosUsuarioSchema = z.object({
    usuario_id: z.number(),
    cpf: z
        .string()
        .refine((cpf) => cpfValidator.isValid(cpf), {
            message: 'CPF inválido',
        })
        .optional(),
    telefone: z.string().optional(),
    endereco: z.string().optional(),
    cidade: z.string().optional(),
    estado: z.string().optional(),
    pais: z.string().optional(),
    data_nascimento: z.coerce.date().optional(),
});

export type AuthData = z.infer<typeof DadosUsuarioSchema>;