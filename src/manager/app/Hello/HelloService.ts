export type SayHello = {
  name: string;
};

export function HelloService(props: SayHello) {
  const { name } = props;

  if (!name) return "";
  if (typeof name !== "string") return "";
  return `Hello ${name}`;
}
