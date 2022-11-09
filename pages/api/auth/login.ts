import { NextApiRequest, NextApiResponse } from "next";
import { LoginController } from "../../../src/manager/app/Auth/Login/LoginController";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return LoginController(req, res);

    default:
      return res.status(400).send("No method provider");
  }
}

export default handler;
