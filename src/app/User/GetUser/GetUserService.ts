import { GetUserRepositorie } from "./GetUserRepositorie";

import type { User } from "./GetUserRepositorie";

export type GetUserServiceResponse = User | string | null;

type GetUserServiceProps = (email: string) => Promise<GetUserServiceResponse>;

export const GetUserService: GetUserServiceProps = async (email) => {
  if (!email) return "Data is missing";

  const user = await GetUserRepositorie(email);

  if (user) {
    return user;
  } else {
    return null;
  }
};
