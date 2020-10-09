terraform {
    required_providers {
        aws = {
            source  = "hashicorp/aws"
            version = "~> 3.0"
        }
    }
}

module "globals" {
    source = "../globals"
}

provider "aws" {
    region  = module.globals.aws_region
}

module "buckets" {
    source = "../../modules/buckets"

    environment = module.globals.environment
    project     = module.globals.project
}