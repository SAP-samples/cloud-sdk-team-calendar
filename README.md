# SAP Cloud SDK Team Calendar Sample

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-sdk-team-calendar)](https://api.reuse.software/info/github.com/SAP-samples/cloud-sdk-team-calendar)

## Description

Learn how to build a side-by-side extension to SAP S/4HANA and SAP SuccessFactors using the SAP Cloud SDK for Javascript.

Start implementation using this sample and follow the given instructions.

You will learn how to:

- Setup and use some of the most common services on CloudFoundry
- Create read requests using the SAP Cloud SDK for Javascript
- Create create requests using the SAP Cloud SDK for Javascript
- Generate your own odata client for a service
- Use your previously generated odata client
- Deploy applications locally and on CloudFoundry
- Automate application deployment

## Prerequisites

- Setup a [free](https://developers.sap.com/tutorials/btp-cockpit-setup.html) account for SAP BTP
- [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - When working on Windows, make sure you have the Git Bash installed and configured to be used with npm
    ```
    npm set config script-shell PATH\TO\YOUR\bash.exe
    ```
- [Install Visual Studio Code](https://code.visualstudio.com/download) or your favorite IDE for TypeScript
- [Install the Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)

## Exercises

- Exercise 1: [Getting started](exercises/01-getting-started.md)
- Exercise 2: [Generate your own OData clients](exercises/02-generate-odata-clients.md)
- Exercise 3: [Create a read request to SAP S/4HANA](exercises/03-s4-read-request.md)
- Exercise 4: [Create a write request to SAP S/4HANA](exercises/04-s4-write-request.md)
- Exercise 5: [Create a read request to SAP SuccessFactors](exercises/05-sfsf-read-request.md)
- Exercise 6: [Deploy your application to Cloud Foundry](exercises/06-deploy-to-cf.md)
- Exercise 7: [Automate deployment](exercises/07-automate-deployment.md)

# Download and installation

You do not need to download this repository or install anything from it. You can just follow the exercises by visiting each of them as listed in the [exercises](#exercises) section.

# Known Issues

All known issues will be listed here.

# How to obtain support

Open a ticket in GitHub or Stackoverflow.

# License

Copyright © 2020 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](./LICENSE) file.

**Note** The [Workforce Timesheet](https://api.sap.com/api/API_MANAGE_WORKFORCE_TIMESHEET/overview) and [Time Off](https://api.sap.com/api/ECTimeOff/overview) services used in the application are licensed under the terms of [SAP API Information License](./LICENSES/LicenseRef-API-Definition-File-License.txt). This limits their use to development purposes only.

## Contributing

If you wish to contribute code, offer fixes or improvements, please send a pull request.
Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request for this project.
This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## Code of Conduct

For this repository, the [code of conduct](./CODE_OF_CONDUCT.md) of the samples repository applies.
