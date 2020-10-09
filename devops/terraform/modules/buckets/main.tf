# KMS Key for encrypting buckets that need it
resource "aws_kms_key" "default_key" {
    description = "Default key for encrypting S3 buckets"
}

# Logging bucket for deployments, whose deploying what
resource "aws_s3_bucket" "log_bucket" {
    bucket = "${var.project}-deployment-logs"
    acl    = "log-delivery-write"

    server_side_encryption_information {
        rule {
            apply_server_side_encryption_by_default {
                kms_master_key_id = aws_kms_key.default_key.arn
                sse_algorithm     = "aws:kms"
            }
        }
    }
}

# Bucket for API deployments
resource "aws_s3_bucket" "api_bucket" {
    bucket = "${var.project}-lambdas"
    acl    = "private"

    tags = {
        Environment = var.environment
        Project     = var.project
    }
}

# Bucket for App deployments
resource "aws_s3_bucket" "app_bucket" {
    bucket = "${var.project}-app"
    acl    = "private"

    tags = {
        Environment = var.environment
        Project     = var.project
    }
}