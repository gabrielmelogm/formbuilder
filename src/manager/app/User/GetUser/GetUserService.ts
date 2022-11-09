import { GetUserRepositorie } from "./GetUserRepositorie";

import type { User } from "./GetUserRepositorie";

export type GetUserServiceResponse = Omit<User, "password"> | string | null;

type GetUserServiceProps = (id: string) => Promise<GetUserServiceResponse>;

export const GetUserService: GetUserServiceProps = async (id) => {
  if (!id) return "Data is missing";

  const user = await GetUserRepositorie(id);

  if (user) {
    return {
      id: user?.id,
      name: user?.name,
      username: user?.username,
      email: user?.email,
    };
  } else {
    return null;
  }
};
