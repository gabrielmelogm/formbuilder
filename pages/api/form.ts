import { NextApiRequest, NextApiResponse } from "next";
import { CreateFormController } from "../../src/app/Form/CreateForm/CreateFormController";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return;
    case "POST":
      return CreateFormController(req, res);
    case "PUT":
      return;
    case "DELETE":
      return;

    default:
      return res.status(400).send("No method provider");
  }
}

export default handler;
