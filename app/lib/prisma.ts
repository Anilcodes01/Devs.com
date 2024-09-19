import { PrismaClient } from '@prisma/client';

// To handle hot reloading in development without creating multiple instances
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// If Prisma client exists globally, use it; otherwise, create a new instance with logging
const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Enable detailed logging
});

// Save the Prisma instance globally if not in production
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
