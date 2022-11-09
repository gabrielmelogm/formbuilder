import { prisma } from "../../../lib/prisma";

export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  isAdm: boolean;
};

export async function GetUserRepositorie(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}
