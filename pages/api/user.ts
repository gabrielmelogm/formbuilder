import { NextApiRequest, NextApiResponse } from "next";
import { CreateUserController } from "../../app/api/User/CreateUser/CreateUserController";
import { GetUserController } from "../../app/api/User/GetUser/GetUserController";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return GetUserController(req, res);
    case "POST":
      return CreateUserController(req, res);
    case "PUT":
      return;
    case "DELETE":
      return;

    default:
      return res.status(400).send("No method provider");
  }
}

export default handler;
