import { Form, CreateFormRepository } from "./CreateFormRepository";

export type CreateFormServiceResponse = Form | string | null;

type CreateFormServiceProps = (
  form: Form
) => Promise<CreateFormServiceResponse>;

export const CreateFormService: CreateFormServiceProps = async (form) => {
  if (!form.title && !form.owner && !form.config) return "Data is missing";

  const response = await CreateFormRepository(form);
  if (response) {
    return response;
  } else {
    return null;
  }
};
