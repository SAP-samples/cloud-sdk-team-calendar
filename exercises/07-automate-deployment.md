# Automate deployment

In a real-world scenario, you would only deploy your changes, once they have been tested for quality. You would execute the tests and checks as well as the deployment automatically. We will use GitHub Actions as a lightweight solution in this tutorial.

## Review the CI / CD configuration

Let's take a look at some configuration files:

- [`.pipeline/config.yml`](../.pipeline/config.yml): Configure the steps of your pipeline.
- [`.github/workflows/build.yml`](../.github/workflows/build.yml): Arrange steps for your pipeline.

In a production environment, you will probably rather use a Jenkins server as of today. For this, you would load the pipeline through a Jenkins file and would not need to arrange your steps in the `build.yml`.

## Adjust pipeline configuration

Go to the [`.pipeline/config.yml`](../.pipeline/config.yml) file and adjust it to your project. Set the org and space for the `cloudFoundryDeploy` step as you have done before when logging in to Cloud Foundry (if you don't remember, run `cf target` on the command line to get a summary).

## Set credentials for deployment

Take a look at the `build.yml` file. The `Deploy` step will deploy your application to the SAP BTP. This step needs credentials.
To set your credentials in Github go to **Settings** and then **Secrets**:
![Github Secrets](images/github-secrets.png)

Create two new secrets `CF_USER` with your user name and `CF_PASSWORD` with your password. Note that even though your credentials are visible while you are entering them, later on, they will be hidden.

## Publish your changes

Stage all your changes in git:

```sh
git add .
```

Commit your changes by executing:

```sh
git commit -m "Connect remote systems"
```

Publish your commit:

```sh
git push
```

Go back to the GitHub Actions tab and check whether your build has been started. This will take a few minutes.
You can take a look at the logs. If anything fails try to figure out what went wrong and fix it.

![Build Success](images/build-success.png)

**Congratulations!** You solved all exercises!
