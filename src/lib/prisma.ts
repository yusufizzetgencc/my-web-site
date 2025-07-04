import { PrismaClient } from "@prisma/client";

// Uygulama dışı ortamlarda PrismaClient örneğini tekrar kullanmak için global değişken tanımla
declare global {
  var prisma: PrismaClient | undefined;
}

const prismaClientSingleton =
  global.prisma ?? new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prismaClientSingleton;
}

export const prisma = prismaClientSingleton;

export default prisma;
