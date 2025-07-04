// lib/db.ts
// Bu dosya uygulama genelinde Prisma istemcisi (PrismaClient) örneğini paylaşmak için kullanılır.
// Geliştirme ortamında birden fazla istemci oluşturulmasını önler.

import { PrismaClient } from "@prisma/client";

// globalThis üzerinden Prisma istemcisini tekrar kullanmak için tip tanımı yapılır.
const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

// Tek bir PrismaClient örneği kullanılır (Singleton pattern)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

// Geliştirme ortamında Prisma istemcisi global değişkene atanır.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
