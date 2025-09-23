// netlify/functions/registrar.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handler(event) {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify("Método não permitido"),
      };
    }

    const { nome, telefone, tipo } = JSON.parse(event.body);

    await prisma.usuario.create({
      data: { nome, telefone, tipo },
    });

    return {
      statusCode: 200,
      body: JSON.stringify("Usuário registrado com sucesso!"),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify("Erro interno no servidor"),
    };
  } finally {
    // Evita conexões abertas demais no serverless
    await prisma.$disconnect();
  }
}
