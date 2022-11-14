import { NextApiRequest, NextApiResponse } from "next";
import { User } from "./GetUserRepository";
import {
  GetAllUsersService,
  GetUserService,
  GetUserServiceResponse,
} from "./GetUserService";

type Data = {
  message?: string;
  user?: GetUserServiceResponse;
};

export async function GetUserController(
  req: Override<NextApiRequest, { body: User }>,
  res: NextApiResponse<Data>
) {
  let response: any;

  if (req.query.email) {
    response = await GetUserService(req.query.email as string);
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
  } else {
    response = await GetAllUsersService();
    return res.send(response);
  }
}
