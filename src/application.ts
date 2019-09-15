import cds from "@sap/cds";
import express from "express";
import { resolve } from "path";
import { serviceHandler } from "./team-calendar-service";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    // make sure to NOT register this stuff on paths where CDS services are hosted!
    this.app.use("/api", express.json());
    this.app.use("/api", express.urlencoded({ extended: false }));
    console.log("Serving static files");
    console.log(resolve(__dirname, "app"));
    this.app.use(express.static(resolve(__dirname, "app")));
  }

  private routes(): void {
    this.app.use(express.Router());
  }
}

const setupApp = () => {
  const _app = new App().app;

  cds.connect.to("db");

  // keep srv folder for now, so that serve defaults work and that we can simply copy it over to the deployment folder
  cds
    .serve("TimesheetService") // by default from srv/
    .to("odata")
    .at("odata/v2/TimesheetService")
    .with(serviceHandler)
    .in(_app);

  // use this (together with an explicit dependency on @sap/cds-services) to enable debug mode

  // cds
  //   .load("./srv/gen/csn.json")
  //   .then(csn => {
  //     cdsServices.inject(cds);
  //     app["_csn"] = cds.linked(cds.compile.for.odata(csn));
  //     const service = cdsServices.service(csn, { debug: true });
  //     app.use("/odata/v2", cdsServices.to.odata_v4(service));
  //     return app;
  //   })

  return _app;
};

export default setupApp();
