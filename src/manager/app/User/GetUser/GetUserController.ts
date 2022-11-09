import { NextApiRequest, NextApiResponse } from "next";
import { User } from "./GetUserRepositorie";
import { GetUserService, GetUserServiceResponse } from "./GetUserService";

type Data = {
  message?: string;
  user?: GetUserServiceResponse;
};

export async function GetUserController(
  req: Override<NextApiRequest, { body: User }>,
  res: NextApiResponse<Data>
) {
  const response: any = await GetUserService(req.query.id as string);

  if (response?.id) {
    const user = response;
    return res.send(user);
  } else if (typeof response === "string") {
    return res.status(422).json({
      message: response,
    });
  } else if (!response) {
    return res.status(400).json({
      message: "User not found",
    });
  }
}
