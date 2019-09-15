# Generate your own OData client
There are many scenarios where you have either your own OData service or want to integrate with another SAP OData service, that is not part of the SAP S/4HANA services, like SAP SucessFactors. For those cases you can generate your own OData client as described in the following.

## Download EDMX file
Download the service specification file for the [Employee Central Time Off service](https://api.sap.com/api/ECTimeOff/overview) from the SAP Business API Hub and put it into the [generator-input directory](generator-input/).

In this directory you will also find the [service mapping file](generator-input/service-mapping.json), that contains some extra configuration for the generated service(s), like the directory name and service path for the service.

## Run the generation
In your [package.json](package.json) you have already installed the `@sap/cloud-sdk-generator` dependency. Let's use it to run the generation. Pass the [generator-config.json](generator-config.json), where we specify input and output directories along with some other options for the generation.
```sh
npx generate-odata-client -c generator-config.json
```
Once this is completed you should find some generated code, your OData client, in the [src/generated/ec-time-off-service directory](src/generated/ec-time-off-service). We will use this code to request additional appointments from SAP SuccessFactors.
