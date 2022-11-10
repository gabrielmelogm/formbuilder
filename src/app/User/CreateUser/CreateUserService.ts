import { GetUserRepository } from "../GetUser/GetUserRepository";
import { CreateUserRepository, User } from "./CreateUserRepository";

export type CreateUserServiceResponse = User | string | null;

type CreateUserServiceProps = (
  user: User
) => Promise<CreateUserServiceResponse>;

export const CreateUserService: CreateUserServiceProps = async (user) => {
  if (!user.email || !user.name) return "Data is missing";

  const getUser = await GetUserRepository(user.email);

  if (getUser) return "User already exists";

  const response = await CreateUserRepository(user);

  return response;
};
