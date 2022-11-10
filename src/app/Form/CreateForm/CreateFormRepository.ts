import { prisma } from "../../../lib/prisma";

export type Form = {
  title: string;
  description: string;
  owner: string;
  config: {
    name: string;
    type: string;
    placeholder?: string;
    maxLenght?: number;
  }[];
};

export async function CreateFormRepository(form: Form) {
  const config: any = form.config;
  try {
    const formCreated = await prisma.form.create({
      data: {
        title: form.title,
        description: form.description,
        owner: form.owner,
      },
    });

    for (let field of config) {
      await prisma.formMaping.create({
        data: {
          config: field,
          formId: formCreated.id,
        },
      });
    }

    return formCreated;
  } catch (error) {
    return error;
  }
}
