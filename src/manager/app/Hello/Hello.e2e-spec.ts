import handler from "../../../../pages/api/hello";
import { testClient } from "../../utils/testClient";

const request = testClient(handler);

describe("[E2E] para rota hello", () => {
  it("Deve retornar hello com nome inputado", async () => {
    const response = await request.get("/hello").send({ name: "vitest" });
    expect(response.status).toStrictEqual(200);
    expect(response.body).toStrictEqual({ message: "Hello vitest" });
  });

  it("Deve retornar erro 422 quando não for enviado um name", async () => {
    const response = await request.get("/hello").send({ name: "" });
    expect(response.status).toStrictEqual(422);
    expect(response.body).toStrictEqual({ message: "Bad format data" });
  });

  it("Deve retornar erro 400 no método post que não existe", async () => {
    const response = await request.post("/hello").send({ name: "vitest" });
    expect(response.status).toStrictEqual(400);
    expect(response.text).toEqual("No method provider");
  });

  it("Deve retornar erro 422 se for enviado outro tipo sem ser string na key name", async () => {
    const response = await request.get("/hello").send({ name: 1 });
    expect(response.status).toStrictEqual(422);
    expect(response.body).toStrictEqual({ message: "Bad format data" });
  });
});
