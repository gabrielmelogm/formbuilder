import bcrypt from "bcrypt";

type HashPasswordProps = (password: string) => Promise<string>;

export const hashPassword: HashPasswordProps = async (password) => {
  const hash = bcrypt.hash(password, 10);
  return hash;
};

type ComparePasswordProps = (
  password: string,
  hash: string
) => Promise<boolean>;

export const comparePassword: ComparePasswordProps = async (
  password: string,
  hash: string
) => {
  const match = bcrypt.compare(password, hash);
  return match;
};
