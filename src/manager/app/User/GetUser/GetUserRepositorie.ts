import { prisma } from "../../../lib/prisma";

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
};

export async function GetUserRepositorie(id: string) {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  return user;
}

export async function GetUserByUsernameRepositorie(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  return user;
}
