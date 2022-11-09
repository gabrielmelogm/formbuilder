import { prisma } from "../../../lib/prisma";

export type NewUser = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export async function CreateUserRepositorie(user: NewUser) {
  const { name, username, email, password } = user;

  const response = await prisma.user.create({
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      password: false,
    },
    data: {
      name,
      username,
      email,
      password,
    },
  });

  return response;
}
