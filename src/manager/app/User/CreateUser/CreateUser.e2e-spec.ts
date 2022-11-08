import handler from "../../../../../pages/api/user";
import { testClient } from "../../../utils/testClient";

const request = testClient(handler);

describe("[E2E] Create user", () => {
  it("Deve ser possível criar um novo usuário", async () => {
    const response = await request.post("/user").send({
      name: "Jest",
      username: "jest",
      email: "jest@test.com.br",
      password: "jest",
    });
    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy();
  });

  it("Não deve ser possível criar um novo usuário sem mandar uma informação", async () => {
    const response = await request.post("/user").send({
      name: "Jest",
      username: "jest",
      email: "",
      password: "jest",
    });
    expect(response.status).toBe(422);
  });
});
