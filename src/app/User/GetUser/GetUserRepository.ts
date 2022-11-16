import { prisma } from "../../../lib/prisma";

export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  isAdm: boolean;
};

export async function GetUserRepository(email: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    return error;
  }
}

export async function GetAllUserRepostitory() {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (error) {
    return error;
  }
}
