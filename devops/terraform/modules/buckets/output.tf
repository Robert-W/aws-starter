output "api_bucket_id" {
    value = aws_s3_bucket.api_bucket.id
}

output "api_bucket_arn" {
    value = aws_s3_bucket.api_bucket.arn
}

output "app_bucket_id" {
    value = aws_s3_bucket.app_bucket.id
}

output "app_bucket_arn" {
    value = aws_s3_bucket.app_bucket.arn
}