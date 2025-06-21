import { Request, Response } from 'express';
import { registerUser } from '../services/registerUser.service';

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registrar um novo usuário e seus dados complementares
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *               - cpf
 *             properties:
 *               email:
 *                 type: string
 *                 example: "teste@exemplo.com"
 *               senha:
 *                 type: string
 *                 example: "senha123"
 *               cpf:
 *                 type: string
 *                 example: "12345678900"
 *               telefone:
 *                 type: string
 *                 example: "11999999999"
 *               endereco:
 *                 type: string
 *                 example: "Rua Exemplo, 123"
 *               cidade:
 *                 type: string
 *                 example: "São Paulo"
 *               estado:
 *                 type: string
 *                 example: "SP"
 *               pais:
 *                 type: string
 *                 example: "Brasil"
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *                 example: "1990-01-01"
 *               nome:
 *                 type: string
 *                 example: "João da Silva"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro de validação (email ou CPF já cadastrados)
 *       500:
 *         description: Erro interno ao tentar cadastrar o usuário
 */


export async function register(req: Request, res: Response) {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}
