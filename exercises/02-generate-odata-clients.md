# Generate your own OData clients

There are many scenarios where you have either your own OData service or want to integrate with another SAP OData service. For those cases, you can generate your own OData client as described in the following.

## Download EDMX file

Download the service specification file for [SAP S/4HANA Cloud Workforce Timesheet service](https://api.sap.com/api/API_MANAGE_WORKFORCE_TIMESHEET/overview) and [SAP SuccessFactors Employee Central Time Off service](https://api.sap.com/api/ECTimeOff/overview) from the SAP Business API Hub and put it into the [`resources/service-specs`](../resources/service-specs/).

In this directory, you will also find the [service mapping file](../resources/service-mapping.json), which contains some extra configuration for the generated service(s), like the directory name and service path for the service.

**Note** As it's described in the [License](SOLUTION.md#license), OData clients for SAP S/4HANA and SAP SuccessFactors should not be made available as open source because it is subject to SAP intellectual property.

## Run the generation

To generate the OData clients, run the following npm script:

```sh
npm run generate
```

Once this is completed you should find your generated OData clients in the [`src/generated`](../src/generated/). We will use this code for OData requests to SAP S/4HANA and SAP SuccessFactors.

### Under the hood: What does the script actually do?

The script runs the following command:

```sh
npx generate-odata-client -c generator-config.json
```

In your [`package.json`](../package.json), you have already installed the `@sap/cloud-sdk-generator`.The command runs the generator with configuration option `-c` which points to [`generator-config.json`](../generator-config.json). We specify [input](../resources/service-specs/) and [output](../src/generated/) directories along with some other options for the generation in the file.

The generator creates clients for all service definitions found in the input directory. The options given in the config are applied to each individual service. To find out more about the options run:

```sh
npx generate-odata-client -h
```

The options are described in [the documentation](https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-odata-client#options).

## Next step: [Create a read request to SAP S/4HANA](03-s4-read-request.md)
