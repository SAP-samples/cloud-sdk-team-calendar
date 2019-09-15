import chai, { expect } from "chai";
import { spy } from "sinon";
import sinonChai from "sinon-chai";
import { serviceHandler } from "../../src/team-calendar-service";

chai.use(sinonChai);

describe("team-calendar-service", () => {
  it("serviceHandler registers on handler", () => {
    const srv = {
      on: spy(),
      after: spy()
    };

    serviceHandler(srv);
    expect(srv.on).to.have.been.called;
    expect(srv.after).to.have.been.called;
  });
});
