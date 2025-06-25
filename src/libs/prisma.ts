import { PrismaClient } from "src/generated/prisma";

const globalParaPrisma = globalThis as unknown as { db: PrismaClient };

export const db = globalParaPrisma.db || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalParaPrisma.db = db;
