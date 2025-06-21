//import { Request, Response } from 'express';
//import { loginUser } from '../services/auth.service';

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Registrar um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string 
 *     responses:
 *       201:
 *         description: Usuário criado
 *       400:
 *         description: Erro de validação
 */

/* export async function login(req: Request, res: Response) {
    try {
        const token = await loginUser(req.body);
        res.status(200).json({ token });
    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
} */