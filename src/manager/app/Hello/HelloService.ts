type HelloService = (name: string) => string;

export const HelloService: HelloService = (name) => {
  if (!name) return "";
  if (typeof name !== "string") return "";
  return `Hello ${name}`;
};
