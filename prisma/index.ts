import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
   await prisma.user.create({
    data: {
      name: 'Yefrin Laura',
      mail: 'hi@yefri.dev',
      phoneNumber: '99999999'
    }
  })

  const allUsers = await prisma.user.findMany()

  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  
