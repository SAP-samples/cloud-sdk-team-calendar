# Generate your own OData client

There are many scenarios where you have either your own OData service or want to integrate with another SAP OData service. For those cases, you can generate your own OData client as described in the following.

## Download EDMX file

Download the service specification file for [SAP S/4HANA Cloud Workforce Timesheet service](https://api.sap.com/api/API_MANAGE_WORKFORCE_TIMESHEET/overview) and [SAP SuccessFactors Employee Central Time Off service](https://api.sap.com/api/ECTimeOff/overview) from the SAP Business API Hub and put it into the [resources/service-specs](../resources/service-specs/).

In this directory, you will also find the [service mapping file](../resources/service-specs/service-mapping.json), which contains some extra configuration for the generated service(s), like the directory name and service path for the service.

## Run the generation
To generate the OData clients, just run an npm script:
```sh
npm run generate
```
Once this is completed you should find some generated code, your OData clients, in the [src/generated](../src/generated/). We will use this code for OData requests to SAP S/4HANA and SAP SuccessFactors.
> ### Under the food: What does the script actually do?
The script runs the following command:
```sh
npx generate-odata-client -c generator-config.json
```
In your [package.json](../package.json) you have already installed the `@sap/cloud-sdk-generator`. The command runs the generator with configuration option `-c` which points to [generator-config.json](../generator-config.json) where we specify input and output directories along with some other options for the generation. The option can generate multiple OData clients at once with the other options as you can see in the file. SAP Cloud SDK offers more options. You can find them using the following command:
```sh
npx generate-odata-client -h
```
The options are described in [our documentation](https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-odata-client#options) as well.

## Next step: [Create a read request to SAP S/4HANA](03-s4-read-request.md)
