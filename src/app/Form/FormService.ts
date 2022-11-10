import { Form, FormRepository } from "./FormRepository";

export type FormServiceResponse = Form | string | null;

type FormServiceProps = (form: Form) => Promise<FormServiceResponse>;

export const FormService: FormServiceProps = async (form) => {
  if (!form.title && !form.owner && !form.config) return "Data is missing";

  const response = await FormRepository(form);
  if (response) {
    return response;
  } else {
    return null;
  }
};
