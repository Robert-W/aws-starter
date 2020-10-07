# Devops
> Container with the sole purpose of deploying the app, api, and supporting infrastructure.

## TODO: 
- Design Terraform in a very modular way to support the necessary actions
- Think about these following use cases terraform should cover:
- - Deploy S3 buckets, built versions will be stored in these buckets
- - Update the S3 application to point to the new version bucket
- - Rollback the S3 application to point to an older bucket
- - Deploy the Lambda functions and have them use a specific S3 bundle
- - Deploy API Gateway and have it point to these specific lambda functions
- - Rollback a Lambda function (Deploy new one and update API Gateway, update in use one)

## Running the container
1. Make sure you have the latest changes from remote
2. Run `docker-compose build devops` to make sure you have built the container with the latest changes.
3. Run `docker-compose run devops` and you will get a terminal in the container.

## Deployment Script
1. Run `docker-compose run devops`.
2. Run `bash deploy.sh`.

## Rollback Script
1. Run `docker-compose run devops`.
2. Run `bash rollback.sh` to print out current arguments/usage. Run again with desired arguments.