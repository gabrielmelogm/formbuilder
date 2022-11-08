import { NextApiRequest, NextApiResponse } from "next";
import { HelloService } from "./HelloService";

type Request = {
  name: string;
};

type Data = {
  message: string;
};

export function HelloController(
  req: Override<NextApiRequest, { body: Request }>,
  res: NextApiResponse<Data>
) {
  const message = HelloService(req.body.name);

  if (message) {
    return res.json({ message });
  } else {
    return res.status(422).json({ message: "Bad format data" });
  }
}
