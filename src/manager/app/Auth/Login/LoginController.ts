import { NextApiRequest, NextApiResponse } from "next";
import { CredentialProps, LoginService } from "./LoginService";

type Data = {
  message: string;
};

export async function LoginController(
  req: Override<NextApiRequest, { body: CredentialProps }>,
  res: NextApiResponse<Data>
) {
  const credentials = req.body;
  const response: any = await LoginService(credentials);

  if (response?.id) {
    const user = response;
    return res.send(user);
  } else {
    return res.status(401).send(response);
  }
}
