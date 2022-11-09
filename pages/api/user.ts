import { NextApiRequest, NextApiResponse } from "next";
import { GetUserController } from "../../src/app/User/GetUser/GetUserController";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return GetUserController(req, res);
    case "POST":
      return;
    case "PUT":
      return;
    case "DELETE":
      return;

    default:
      return res.status(400).send("No method provider");
  }
}

export default handler;
