import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { nome, telefone, type } = body;

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        telefone,
        tipo: type,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Usuário criado!", usuario }),
    };
  } catch (error) {
    console.error("Erro Prisma:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Erro ao cadastrar",
        error: error.message,
      }),
    };
  }
};

export { handler };
