import { NextApiRequest, NextApiResponse } from "next";
import { Form } from "./CreateFormRepository";
import {
  CreateFormService,
  CreateFormServiceResponse,
} from "./CreateFormService";

type Data = {
  message?: string;
  form?: CreateFormServiceResponse;
};

export async function CreateFormController(
  req: Override<NextApiRequest, { body: Form }>,
  res: NextApiResponse<Data>
) {
  const response: any = await CreateFormService(req.body);

  if (response?.id) {
    const form = response;
    return res.send(form);
  } else {
    return res.status(422).json({
      message: response,
    });
  }
}
