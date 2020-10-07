# AWS Starter

## Goals (Placeholder while building)

*API*
- API is a series of lambda functions that get deployed via a build script
- Script will bundle each directory function, generate a terraform variable file,
- use those variables to upload a new bundle to S3, and update the lambda function.
- It should also clean up after itself.
- S3 bucket should use format: <project-name>-lambdas/<endpoint-name>/<version>.zip
- All lambdas should use the same runtime (Node 12)
- All lambdas will sit behind API Gateway and will be protected by Cognito
- Each lambda function file should export a function and the methods used,
- the methods used is something that will be needed by the dev server for local testing
- the dev server should mock up the event and context objects so we can properly run
- these functions in a local development environment
- Future Goal: Support AppSync, AWS Managed GraphQL. Design development-server
- in a way it can build Rest endpoints or GraphQL Endpoints compatible with app sync

*App*
- Simple multipage react app built by webpack
- Homepage will redirect to Cognito which will eventually redirect to a dashboard
- Authentication module will need to be easily removable/configurable
- Will be deployed into S3 versioned based on package.json
- S3 buckets should use format: <project-name>-app/<version>/<contents-of-dist>


*Devops*
- Want to use versioned S3 static website hosting
- Want to use Cognito for all authentication
- Authentication module will need to be easily removable/configurable
- Api will be API Gateway in front of AWS Lambda
- Deployment script should be able to discover if the version present is available
- or not
- Should have a lightweight docker container that will be used for deployments and
- any devops related tasks
- Need to figure out how to mock Cognito out for local use

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
