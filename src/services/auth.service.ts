import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET!;

export const dadosUsuarioSchema = z.object({
  cpf: z
    .string()
});

type DadosUsuario = z.infer<typeof dadosUsuarioSchema>;

/* interface AuthData {
  name?: string;
  email: string;
  password: string;
} */

/* export async function registerUser(data: dados_usuario) {
  if (data.cpf) {
    const userExists = await prisma.dados_usuario.findUnique({
      where: { cpf: data.cpf },
    });

    if (userExists) {
      throw new Error('CPF já cadastrado');
    }
  }

  try {
    await prisma.$executeRaw`
      CALL sp_inserir_usuario_dados(
        ${data.cpf},
        ${data.nome},
        ${data.cpf},
        ${data.telefone},
        ${data.endereco},
        ${data.cidade},
        ${data.estado},
        ${data.pais},
        ${data.data_nascimento},
        ${data.nome},
        ${data.ultimo_acesso}
      )
    `;
  } catch (error) {
    console.error('Erro ao executar a procedure:', error);
    throw new Error('Erro ao cadastrar usuário');
  }
} */

/* export async function registerUser(data: DadosUsuario) {  
  if (data.cpf) {
    const userExists = await prisma.dados_usuario.findUnique({
      where: { cpf: data.cpf },
    });

    if (userExists) {
      throw new Error('CPF já cadastrado');
    }
  }
} */

/* export async function loginUser({ email, password }: AuthData) {
  const user = await prisma.usuario.findUnique({ where: { email } });
  if (!user) throw new Error('Usuário não encontrado');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Senha incorreta');

  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
  return token;
} */