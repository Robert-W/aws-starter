# This script will rollback a deployment for the api/app. The process should be as follows:
#
# 1. Parse arguments given to script
# 1(cont). Example setup:  ./rollback <deployment> [<function>] <version>
# 1(cont). Deployment is api or app, if api, specify which function, then specify version
# 2. Validate arguments given are valid and the version exists for the deployment
# 3. Invoke the appropriate terraform module with the approriate version passed in