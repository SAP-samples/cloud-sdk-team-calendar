import axios from "axios";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { Server } from "http";
import app from "../../src/application";

chai.use(chaiHttp);

describe("GET /odata/v2/TeamCalendar", function () {
  this.timeout(4000);

  let server: Server;

  before(async () => {
    server = app.listen(8080);
    await new Promise(done => setTimeout(done, 1000)); // CDS needs some time to bring the services online after express itself signals that it's ready
  });

  after(() => {
    server.close();
  });

  it("returns all appointments for a given year", done => {
    axios
      .get("http://localhost:8080/odata/v2/TimesheetService/TeamCalendar(2019)")
      .then(resp => {
        expect(resp.data.year).to.equal(2019);
        done();
      })
      .catch(done);
  });
});
