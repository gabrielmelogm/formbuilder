import { NextApiRequest, NextApiResponse } from "next";
import { User } from "./CreateUserRepository";
import {
  CreateUserService,
  CreateUserServiceResponse,
} from "./CreateUserService";

type Data = {
  message?: string;
  user?: CreateUserServiceResponse;
};

export async function CreateUserController(
  req: Override<NextApiRequest, { body: User }>,
  res: NextApiResponse<Data>
) {
  const response: any = await CreateUserService(req.body);

  if (response?.id) {
    const user = response;
    return res.status(201).json({
      message: "User created",
      user,
    });
  } else {
    return res.status(422).json({
      message: response,
    });
  }
}
