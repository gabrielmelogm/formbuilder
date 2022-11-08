import { GetUserRepositorie } from "./GetUserRepositorie";

import type { User } from "./GetUserRepositorie";

type GetUserServiceProps = (
  id: string
) => Promise<Omit<User, "password"> | null>;

export const GetUserService: GetUserServiceProps = async (id) => {
  if (!id) return null;

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
