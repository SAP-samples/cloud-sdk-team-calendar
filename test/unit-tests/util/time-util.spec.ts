import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { dateToString, splitAppointmentIntoDays, timeToString } from "../../../src/util/time-util";
import { multiDayAppointment } from "../../test-util/mock-data";
import moment = require("moment");

chai.use(sinonChai);

describe("appointment transformation", () => {
  it("timeToString for no time", () => {
    expect(timeToString(undefined)).to.equal(null);
  });

  it("timeToString for time", () => {
    expect(
      timeToString({
        hours: 3,
        minutes: 3,
        seconds: 3
      })
    ).to.equal("03:03:03");
  });

  it("dateToString for no date", () => {
    expect(dateToString(undefined)).to.equal(null);
  });

  it("dateToString for date", () => {
    expect(dateToString(moment.utc("2019-01-01"))).to.equal("2019-01-01");
  });

  it("split appointment into days", () => {
    expect(splitAppointmentIntoDays(multiDayAppointment)).lengthOf(3);
  });
});
