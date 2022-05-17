# SAP Cloud SDK Team Calendar Sample

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-sdk-team-calendar)](https://api.reuse.software/info/github.com/SAP-samples/cloud-sdk-team-calendar)

## Description
Learn how to build a side-by-side extension to SAP S/4HANA and SAP SuccessFactors using the SAP Cloud SDK for Javascript.

Start implementation using this sample and follow the given instructions.

You will learn how to:
  * Setup and use some of the most common services on CloudFoundry
  * Create read requests using the SAP Cloud SDK for Javascript
  * Create create requests using the SAP Cloud SDK for Javascript
  * Generate your own odata client for a service
  * Use your previously generated odata client
  * Deploy applications locally and on CloudFoundry
  * Automate application deployment

## Prerequisites

* Setup a [free](https://developers.sap.com/tutorials/btp-cockpit-setup.html) account for SAP BTP
* [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * When working on Windows make sure you have the Git Bash installed and configured to be used with npm
    ```
    npm set config script-shell <P:\ath\to\your\bash.exe>
    ```
* [Install Visual Studio Code](https://code.visualstudio.com/download) or your favorite IDE for TypeScript
* [Install the Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)

## Exercises

* Exercise 1: [Getting started](exercises/01-getting-started.md)
* Exercise 2: [Create a read request to SAP S/4HANA](exercises/02-s4-read-request.md)
* Exercise 3: [Create a write request to SAP S/4HANA](exercises/03-s4-write-request.md)
* Exercise 4: [Deploy your application to Cloud Foundry](exercises/04-deploy-to-cf.md)
* Exercise 5: [Generate your own OData client](exercises/05-generate-odata-client.md)
* Exercise 6: [Create a request with your own OData client](exercises/06-use-odata-client.md)
* Exercise 7: [Automate deployment](exercises/07-automate-deployment.md)

# Download and installation
You do not need to download this repository nor install anything from it. You can just follow the exercises by visiting each of them as listed in the [exercises](#exercises) section.

# Known Issues
All known issues will be listed here.

# How to obtain support
Ask questions at the CodeJam itself or open a ticket in GitHub or Stackoverflow.

# License
Copyright © 2020 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](./LICENSE) file.
