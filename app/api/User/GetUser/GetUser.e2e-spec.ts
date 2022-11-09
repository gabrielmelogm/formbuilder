import handler from "../../../../pages/api/user";
import { testClient } from "../../../utils/testClient";

const request = testClient(handler);

describe("[E2E] Get user", () => {
  it("Deve ser possível criar um novo usuário e buscá-lo", async () => {
    const userCreated = await request.post("/user").send({
      name: "Jest",
      username: "jest",
      email: "jest@test.com.br",
      password: "jest",
    });
    expect(userCreated.status).toBe(201);
    expect(typeof userCreated.body.user.id).toStrictEqual("string");

    const response = await request.get("/user").query({
      id: userCreated.body.user.id,
    });
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(userCreated.body.user);
  });
});
