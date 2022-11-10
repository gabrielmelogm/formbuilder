import { prisma } from "../src/lib/prisma";

async function main() {
  console.log(`Start seeding ...`);
  const result = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@seed.com.br",
      isAdm: true,
      forms: {
        create: {
          title: "Form do john doe",
          description: "form de teste criado pelo seed",
          formFields: {
            create: {
              config: {
                name: "name",
                type: "text",
                placeholder: "Seu nome",
                maxLenght: 100,
              },
            },
          },
        },
      },
    },
  });
  console.log(result);
}

main();
