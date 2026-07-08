import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.deleteMany();

  const todos = Array.from({ length: 20 }, () => ({
    title: faker.hacker.phrase(),
    completed: faker.datatype.boolean(),
  }));

  await prisma.todo.createMany({
    data: todos,
  });

  console.log(`✅ ${todos.length} todos created`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
