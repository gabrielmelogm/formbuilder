import { comparePassword, hashPassword } from "./bcrypt";

const password = "123456";

describe("Deve conseguir gerar um hash a partir de uma senha", () => {
  it("Deve retornar um hash", async () => {
    const hash = await hashPassword(password);
    expect(hash).toBeDefined();
  });

  it("Deve conseguir gerar um hash e comparar com a senha", async () => {
    const hash = await hashPassword(password);
    const match = await comparePassword(password, hash);
    expect(match).toBe(true);
  });
});
