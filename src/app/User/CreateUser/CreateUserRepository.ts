import { prisma } from "../../../lib/prisma";

export type User = {
  name: string;
  email: string;
  image?: string;
};

export async function CreateUserRepository(user: User) {
  try {
    const response = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        image: user.image,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
