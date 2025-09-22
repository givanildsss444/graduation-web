import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { type, name, phone } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: { tipo: type, nome: name, telefone: phone },
    });

    res.json({ message: "Cadastro realizado com sucesso!", user: novoUsuario });
  } catch (err) {
    console.error("Erro:", err);
    res.status(400).json({ error: "Erro ao cadastrar usuário" });
  }
});

app.listen(3001, () => console.log("🚀 Servidor rodando na porta 3001"));
