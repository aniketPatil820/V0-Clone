import { PrismaClient } from "@prisma/client"
import "dotenv/config"

const db =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  })
if (process.env.NODE_ENV === "development") {
  globalThis.prisma = db
}

export default db
