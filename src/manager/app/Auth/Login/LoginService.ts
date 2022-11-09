import { GetUserByUsernameRepositorie } from "../../User/GetUser/GetUserRepositorie";

export type CredentialProps = {
  username: string;
  password: string;
};

export async function LoginService(credentials: CredentialProps) {
  if (!credentials.username && !credentials.password)
    return "No credentials provided";

  try {
    const getUser = await GetUserByUsernameRepositorie(credentials.username);
    if (!getUser) return "User not found";
    return getUser;
  } catch (error) {
    console.error(error);
  }
}
