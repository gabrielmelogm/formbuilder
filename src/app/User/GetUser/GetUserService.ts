import { GetAllUserRepostitory, GetUserRepository } from "./GetUserRepository";

import type { User } from "./GetUserRepository";

export type GetUserServiceResponse = User | string | null;

type GetUserServiceProps = (email: string) => Promise<GetUserServiceResponse>;

export const GetUserService: GetUserServiceProps = async (email) => {
  if (!email) return "Data is missing";

  const user = await GetUserRepository(email);

  if (user) {
    return user;
  } else {
    return null;
  }
};

type GetAllUsersServiceProps = () => Promise<User[] | null>;

export const GetAllUsersService: GetAllUsersServiceProps = async () => {
  const users = await GetAllUserRepostitory();

  if (users) {
    return users;
  } else {
    return null;
  }
};
