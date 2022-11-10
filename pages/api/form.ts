import { NextApiRequest, NextApiResponse } from "next";
import { FormController } from "../../src/app/Form/FormController";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return;
    case "POST":
      return FormController(req, res);
    case "PUT":
      return;
    case "DELETE":
      return;

    default:
      return res.status(400).send("No method provider");
  }
}

export default handler;
