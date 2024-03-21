import { readFileSync } from "fs";
import { app } from "../app";
import SuperTest from "supertest";
import { join } from "path";
const requestWithSupertest = SuperTest(app);

describe("GET /api/diagram/", () => {
  it("Should return a new image diagram", async () => {
    const examplePythonCode: string = readFileSync(
      join(__dirname, "/example.test.py"),
      "utf-8",
    );

    const response = await requestWithSupertest
      .get("/api/diagram")
      .set("Content-Type", "text/plain")
      .send(examplePythonCode);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});
