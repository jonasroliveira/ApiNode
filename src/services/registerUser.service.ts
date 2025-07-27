import { PrismaClient } from "@prisma/client";

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
    throw new Error("Email já cadastrado");
  }

  // Se quiser, descomente para verificar cpf duplicado
  /* const cpfExists = await prisma.dados_usuario.findUnique({
    where: { cpf: data.cpf },
  });

  if (cpfExists) {
    throw new Error('CPF já cadastrado');
  } */

  // Gerar valor para p_ultimo_acesso no formato 'HH:mm:ss-03'
  const agora = new Date();

  try {
    await prisma.$queryRawUnsafe(
      `
  CALL sp_inserir_usuario_dados(
    $1::VARCHAR,
    $2::VARCHAR,
    $3::VARCHAR,
    $4::VARCHAR,
    $5::TEXT,
    $6::VARCHAR,
    $7::VARCHAR,
    $8::VARCHAR,
    $9::DATE,
    $10::VARCHAR
  )
`,
      data.email,
      data.senha,
      data.cpf,
      data.telefone ?? "",
      data.endereco ?? "",
      data.cidade ?? "",
      data.estado ?? "",
      data.pais ?? "",
      data.data_nascimento ?? null,
      data.nome ?? ""
    );
  } catch (error: any) {
    console.error("Erro ao executar a procedure:", error);
    console.error("Erro detalhado:", error);
    throw new Error("Erro ao cadastrar usuário");
  }
}
