output "frontend_url" {
  value = "https://${aws_cloudfront_distribution.frontend.domain_name}"
}

output "api_url" {
  value = aws_apigatewayv2_api.backend.api_endpoint
}

output "frontend_bucket_name" {
  value = aws_s3_bucket.frontend.id
}