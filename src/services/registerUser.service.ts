import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RegisterUserData {
    email: string;
    senha: string;
    cpf: string;
    telefone?: string;
    endereco?: string;
    cidade?: string;
    estado?: string;
    pais?: string;
    data_nascimento?: Date;
    nome?: string;
}

export async function registerUser(data: RegisterUserData) {    
    const emailExists = await prisma.usuario.findUnique({
        where: { email: data.email },
    });

    if (emailExists) {
        throw new Error('Email já cadastrado');
    }

    // Verificar se o CPF já existe na tabela dados_usuario
  /*   const cpfExists = await prisma.dados_usuario.findUnique({
        where: { cpf: data.cpf },
    });

    if (cpfExists) {
        throw new Error('CPF já cadastrado');
    } */

    try {
        await prisma.$executeRawUnsafe(
            `
      CALL sp_inserir_usuario_dados(
        '${data.email}',
        '${data.senha}',
        '${data.cpf}',
        '${data.telefone ?? ''}',
        '${data.endereco ?? ''}',
        '${data.cidade ?? ''}',
        '${data.estado ?? ''}',
        '${data.pais ?? ''}',
        '${data.data_nascimento ?? ''}',
        '${data.nome ?? ''}'
      )
      `
        );
    } catch (error) {
        console.error('Erro ao executar a procedure:', error);
        throw new Error('Erro ao cadastrar usuário');
    }
}
