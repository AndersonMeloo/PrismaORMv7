import { prisma } from "./lib/prisma.js";

async function getUsers() {

    //findManu: Buscar todos
    const users = await prisma.user.findMany()
    console.log(users)
}

getUsers()
//terminal: npx tsx index.ts