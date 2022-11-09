import { hashPassword } from "../../../utils/bcrypt";
import {
  GetUserByUsernameRepositorie,
  User,
} from "../GetUser/GetUserRepositorie";
import { CreateUserRepositorie, NewUser } from "./CreateUserRepositorie";

type CreateUserServiceProps = (
  user: NewUser
) => Promise<Omit<User, "password"> | { error: string }>;

export const CreateUserService: CreateUserServiceProps = async (user) => {
  const { name, username, email, password } = user;

  if (!name || !username || !email || !password)
    return {
      error: "Data is missing",
    };

  const getUser = await GetUserByUsernameRepositorie(username);

  if (getUser)
    return {
      error: "Username already exists",
    };

  const hash = await hashPassword(password);

  const newUser = {
    name,
    username,
    email,
    password: hash,
  };

  const response = await CreateUserRepositorie(newUser);

  return response;
};
