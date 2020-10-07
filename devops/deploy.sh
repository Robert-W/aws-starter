# This script will deploy/update all the api/app resources as well as any
# infrastructure. The process should be as follows:
#
# 1. Deploy suporting infrastructure with terraform
# 2. Deploy the app
# 2a. Use terraform to deploy the app module (S3 buckets etc)
# 2b. Get the bucket name from terraform output, check to see if there is a deployment matching local version
# 2c. Deploy if we have a newer version, otherwise proceed
# 3. Deploy the endpoints
# 3a. Use terraform to deploy the api-buckets module (S3 Buckets)
# 3b. Get the bucket name from terraform output
# 3c. Check each lambdas package.json to against the bucket to see if we need to deploy a new version
# 3d. Build, bundle, and deploy each lambda that needs to be updated
# 3e. Use terraform to deploy api module (API Gateway, Lambda). You will need versions from previous steps
#
# Things to consider:
# - Script should receive an env argument to deploy the correct set of terraform files
# - Lambdas should be deployed at: <project-name>-lambdas/<endpoint-name>/<version>.zip
# - App should be deployed at: <project-name>-app/<version>/<contents-of-dist>
# - This script should be run from inside this container. We should use this container
# -- as our bastion server for easy deployment in other environments
#
# Future addons:
# 1. Isolated deployment capabilities. I know I updated a single API gateway or app, deploy
# -- only that particular feature directly and dont bother checking other ones. Or, two are
# -- updated but I only have permission to deploy one.
# 2. Rollback script
# 2a. Since code is deployed to S3, takes a version, and rolls back app/lambdas to version