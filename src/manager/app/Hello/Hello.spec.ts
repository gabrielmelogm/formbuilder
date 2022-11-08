import { testClient } from "../../utils/testClient";
import handler from "../../../../pages/api/hello";
import { HelloService } from "./HelloService";

const request = testClient(handler);

describe("Testes unitários para HelloService", () => {
  it("Deve retornar hello com nome inputado", () => {
    expect(HelloService({ name: "vitest" })).toEqual("Hello vitest");
  });

  it("Deve retornar vazio quando não for enviado um nome", () => {
    expect(HelloService({ name: "" })).toEqual("");
  });

  it("Deve retornar vazio quando for enviado um nome que não seja string", () => {
    const name: any = 1;
    expect(HelloService(name)).toEqual("");
  });
});
