import express from "express";
import prisma from "./client"; // ✅ Assure-toi que Prisma est bien importé de `client.ts`

const app = express();
app.use(express.json());

export { app, prisma };
