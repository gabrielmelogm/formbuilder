import { NextApiRequest, NextApiResponse } from "next";
import { HelloController } from "../../src/manager/app/Hello/HelloController";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return HelloController(req, res);

    default:
      return res.status(400).send("No method provider");
  }
}

export default handler;
