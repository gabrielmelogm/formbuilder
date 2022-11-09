import { NextApiRequest, NextApiResponse } from "next";
import { NewUser } from "./CreateUserRepositorie";
import { CreateUserService } from "./CreateUserService";

type CreateUserResponse = {
  message: string;
  user?: Omit<NewUser, "password"> | { error: string };
};

export async function CreateUserController(
  req: Override<NextApiRequest, { body: NewUser }>,
  res: NextApiResponse<CreateUserResponse>
) {
  const response: any = await CreateUserService(req.body);

  if (response?.id) {
    return res.status(201).json({
      message: "User created successfully",
      user: response,
    });
  } else {
    return res.status(422).send(response);
  }
}
