import { NextApiRequest, NextApiResponse } from "next";
import { User } from "./GetUserRepositorie";
import { GetUserService } from "./GetUserService";

type Data = {
  message?: string;
  user?: Omit<User, "password"> | null;
};

export async function GetUserController(
  req: Override<NextApiRequest, { body: User }>,
  res: NextApiResponse<Data>
) {
  const response = await GetUserService(req.query.id as string);

  if (response) {
    return res.send({ user: response });
  } else {
    return res.status(422).json({
      message: "Usuário não encontrado",
    });
  }
}
