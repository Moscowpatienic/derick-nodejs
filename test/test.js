const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello Derick", (done) => {
    request(app).get("/").expect("Hello Derick", done);
  })
});
