import { NextApiRequest, NextApiResponse } from "next";
import { HelloService, SayHello } from "./HelloService";

type Data = {
  message: string;
};

export function HelloController(
  req: Override<NextApiRequest, { body: SayHello }>,
  res: NextApiResponse<Data>
) {
  const name = req.query.name as string;
  const message = HelloService({ name });

  if (message) {
    return res.json({ message });
  } else {
    return res.status(422).json({ message: "Bad format data" });
  }
}
