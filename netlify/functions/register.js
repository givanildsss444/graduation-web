import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handler(event) {
  try {
    // Só permite POST
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Método não permitido" };
    }

    const { nome, telefone, tipo } = JSON.parse(event.body);

    // Cria usuário no Neon via Prisma
    const novoUsuario = await prisma.usuario.create({
      data: { nome, telefone, tipo },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Usuário registrado com sucesso!",
        usuario: novoUsuario,
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erro ao registrar usuário", error: err.message }),
    };
  } finally {
    // Fecha conexão do Prisma
    await prisma.$disconnect();
  }
}
