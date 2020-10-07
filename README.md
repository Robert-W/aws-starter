# AWS Starter
Serverless AWS Stack for simple, static website hosted on S3 with a RESTful backend deployed on API Gateway and Lambda. This does not cover more advanced use cases that would need server side components, containers, or REST alternatives like GraphQL.

## Getting Started
You have two options for local development, running everything entirely in Docker (easier setup, better consistency), or running everything natively on your OS (quicker development). Choose whichever option works best for you. Once you have the components up and running, see the components README's for more information.

### Running in Docker
> Extra devops container that can be used for deployments.

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Build the api container `docker-compose build api`.
3. Build the app container `docker-compose build app`.
4. Run the api container `docker-compose up api`.
5. Run the app container `docker-compose up app`.

### Running Natively
> Has no devops container to run. You will only need devops dependencies when deploying.

1. Install [NodeJS 12](https://nodejs.org/en/download/). Consider using `nvm` to install if you work on multiple projects on your machine.
2. Install Terraform version 0.13.3 (or whatever is specified in devops/Dockerfile). Consider using `tfenv` to install if you work on multiple projects on your machine.
3. Install [AWS CLI V2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
4. Install dependencies for the api, from root `cd api && npm install`.
5. Install dependencies for the app, from root `cd app && npm install`.
6. Run the api, from the api directory `npm start`.
7. Run the app, from the app directory `npm start`.

## API
See [API README](./api/README.md).

## Application
See [Application README](./app/README.md).

## Devops
See [Devops README](./devops/README.md).

## TODO

Repo is not usable until the following tasks are complete:

- Lambda API wrapper function in `api/development-server.js` needs to add mock event and context
- Terraform code for deploying API Gateway, Lambdas, and App code
- Deployment script
- Rollback script

Optional additions:

- Cognito integration and authorization on sub pages of S3 repo
- Documentation on External/Internal APIs using Cognito
- SPA usability as an S3 App