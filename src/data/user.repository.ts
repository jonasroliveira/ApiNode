import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class userRepository {
    async getAll() {
        return prisma.usuario.findMany();
    }

    async getById(id: number) {
        return prisma.usuario.findUnique({ where: { id } });
    }

    /* async create(data: { name: string; email: string; password: string; cpf?: string; telefone?: string; endereco?: string; cidade?: string; estado?: string; pais?: string; data_nascimento?: Date }) {
        return prisma.usuario.create({ data });
    } */

    async delete(id: number) {
        return prisma.usuario.delete({ where: { id } });
    }
}