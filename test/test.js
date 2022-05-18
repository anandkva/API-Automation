const chai = require("chai");
const chaiHttp = require("chai-http");
const server = "https://628492623060bbd3473afa74.mockapi.io";

chai.should();
chai.use(chaiHttp);

describe("Task API", () => {
  describe("Test GET ALL USER", () => {
    it("Get All Data", (done) => {
      chai
        .request(server)
        .get("/api/v1/user")
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
        });
      done();
    });
  });
  describe("Test GET USER by ID", () => {
    it("it user by id", (done) => {
      const id = 1;
      chai
        .request(server)
        .get("/api/v1/user/" + id)
        .end((err, res) => {
          res.should.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id");
          res.body.should.have.property("username");
          res.body.should.have.property("Password");
          res.body.should.have.property("email");
          res.body.should.have.property("role");
        });
      done();
    });
  });
  describe("Test Post USER", () => {
    it("Post user", (done) => {
      const user = {
        username: "Anand",
        Password: 1234,
        email: "anand.kva00@gmail.com",
        role: 1,
      };
      chai
        .request(server)
        .post("/api/v1/user/")
        .send(user)
        .end((err, res) => {
          res.should.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("username").eq("Anand");
          res.body.should.have.property("Password").eq(1234);
          res.body.should.have.property("email").eq("anand.kva00@gmail.com");
          res.body.should.have.property("role").eq(1);
        });
      done();
    });
  });
});
