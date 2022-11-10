import handler from "../../../../pages/api/user";
import { testClient } from "../../../utils/testClient";

const request = testClient(handler);

describe("[E2E] para rota POST/user", () => {
  it("Deve retornar 201 ao criar um usuário", async () => {
    const response = await request.post("/user").send({
      name: "John Doe",
      email: "johndoe@e2e.com.br",
    });
    expect(response.status).toBe(201);
    expect(response.body.message).toStrictEqual("User created");
    expect(response.body.user).toHaveProperty("id");
  });

  it("Deve retornar 422 ao não mandar todas as informações", async () => {
    const response = await request.post("/user").send({
      name: "",
      email: "johndoe@e2e.com.br",
    });
    expect(response.status).toBe(422);
    expect(response.body.message).toStrictEqual("Data is missing");
    expect(!!response.body.user).toStrictEqual(false);
  });
});
