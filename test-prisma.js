// test-prisma.js
// Funciona mesmo se seu package.json tiver "type": "module"

let PrismaClient;
try {
  // Tenta importar estilo ES Module
  PrismaClient = (await import("@prisma/client")).PrismaClient;
} catch {
  // Cai pro require padrão CommonJS
  PrismaClient = require("@prisma/client").PrismaClient;
}

const prisma = new PrismaClient();

async function main() {
  try {
    const usuarios = await prisma.usuario.findMany();
    console.log("Conectou! Usuários:", usuarios);
  } catch (err) {
    console.error("Erro ao conectar:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
