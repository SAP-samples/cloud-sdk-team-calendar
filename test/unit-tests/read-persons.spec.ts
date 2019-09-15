import chai, { expect } from "chai";
import { stub } from "sinon";
import sinonChai from "sinon-chai";
import { personById, readPersons } from "../../src/read-persons";
import { person } from "../test-util/mock-data";

chai.use(sinonChai);

describe("readPersons", () => {
  it("gets persons", () => {
    const srv = {
      read: stub().resolves([person])
    };

    readPersons(srv);
    expect(srv.read).to.have.been.called;
  });

  it("gets person by id", () => {
    const srv = {
      read: stub().resolves([person])
    };

    personById(srv, "1");
    expect(srv.read).to.have.been.called;
  });

  it("fails if there is no person with id", done => {
    const srv = {
      read: stub().resolves([])
    };

    personById(srv, "1")
      .then(() => {
        done(Error("Should have failed."));
      })
      .catch(() => {
        done();
      });
  });
});
