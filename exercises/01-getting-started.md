# Getting started
In the following we describe how to get started with this project.
You will create a new **private** repository based on this repository and run the application locally to get familiar with it.

> In the original session, the participants were handed out a participantId. If you go through the tasks on your own, make up your own id. We recommend to refrain from using personal data.

## Create a new repository based on this template
Click the *Use this template* button on the top of the GitHub page.
![Use Template](images/use-template.png)

Fill in the name of your new repository (e. g. *cloud-sdk-team-calendar*) and make sure to create a **private** repository. Click on *Create repository*.
![Create New](images/create-new.png)

> ### Why private?
> We recommend to create your project as a private repository due to licensing constraints. In [exercise 5](05-generate-odata-client.md) we will generate an OData client for SAP SuccessFactors, that is subject to SAP intellectual property and should not be made available as open source. As long as you don't publish these changes, feel free to create a public repository as well.

## Clone your repository
On your laptop open a command line and enter the following command. Don't forget to replace your username (and repository name should you have chosen a different one):
```sh
git clone https://github.com/<your-github-username>/cloud-sdk-team-calendar.git
```

## Deploy the S/4HANA and SFSF mock server (Optional)

>Note: If you have access to both SAP S/4HANA and SAP Successfactors Cloud systems, you can skip this step.

Follow these [instructions](https://github.com/SAP/cloud-s4-sdk-book/tree/mock-server#how-to-run-the-server) on how to setup your S4/HANA / SFSF mock server and deploy it on SAP Cloud Platform, Cloud Foundry.

## Setup the destination file

Retrieve the server's route, you can then replace the S4HANA and SFSF `url` in the [`.env`](../.env) file with the route url of the server. The `.env` file should have the same URLs if you use the mock server, because the mock server offers both services:

```json
destinations=[{"name":"S4HANA","url":"<S4-server-url>","authentication":"NoAuthentication"},{"name": "SFSF", "url": "<SFSF-server-url>","authentication":"NoAuthentication"}]
```

> ### If you lost the mock server's route
> Open the SAP [Cloud Platform Cockpit](https://account.hana.ondemand.com/) and open your subaccount, if you have a trial account it should be called trial, then open your space, where your applications are deployed, you should find the newly deployed mock server.

## Start the application locally
Open the project in your IDE. For the remainder of this course we will assume you are using Visual Studio Code. Please adapt accordingly if you are using a different IDE.

To open the project go to *File > Open...* and select the folder you just cloned from GitHub.

Let's check that everything works and run the application locally. First, open the command line with *Terminal > New Terminal*. Then, install the dependencies:

```sh
npm install
```

Deploy a local database (locally we use sqlite):
```sh
npm run cds-deploy:local
```

And start the application in watch mode, so that every change you implement subsequently is reflected immediately:
```sh
npm run watch:local
```

Now, you should find your application running at http://localhost:8080.

All data is in September:
![Local Deployment](images/local-deployment.png)
