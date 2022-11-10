import { NextApiRequest, NextApiResponse } from "next";
import { Form } from "./FormRepository";
import { FormService, FormServiceResponse } from "./FormService";

type Data = {
  message?: string;
  form?: FormServiceResponse;
};

export async function FormController(
  req: Override<NextApiRequest, { body: Form }>,
  res: NextApiResponse<Data>
) {
  const response: any = await FormService(req.body);

  if (response?.id) {
    const form = response;
    return res.send(form);
  } else {
    return res.status(422).json({
      message: response,
    });
  }
}
