
import testServer from "./jest.setup";

describe("GET /users", () => {
  it("should return 200 OK", async () => {
    const response = await testServer.get("/users");
    expect(response.status).toBe(200);
  });
});