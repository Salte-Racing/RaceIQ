# AWS SPA with Lambda Backend

This project demonstrates a modern web application architecture using AWS services. It consists of a React-based Single Page Application (SPA) hosted on S3 and served through CloudFront, with a Node.js Lambda backend API.

## Architecture

- Frontend: React SPA hosted on S3 and served through CloudFront
- Backend: Node.js Lambda functions with API Gateway
- Infrastructure: Managed with Terraform
- CI/CD: GitHub Actions pipeline

## Prerequisites

- Node.js 18 or later
- AWS CLI configured with appropriate credentials
- Terraform 1.0.0 or later
- GitHub account with repository access

## Project Structure

```
.
├── frontend/           # React SPA
├── backend/           # Lambda functions
├── infrastructure/    # Terraform configurations
│   └── terraform/
└── tests/            # Test suites
    └── selenium/     # Selenium smoke tests
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure AWS credentials:
   ```bash
   aws configure
   ```
4. Update the S3 bucket name in `infrastructure/terraform/main.tf`

## Development

1. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

2. Run backend tests:
   ```bash
   cd backend
   npm test
   ```

3. Run frontend tests:
   ```bash
   cd frontend
   npm test
   ```

## Deployment

The application is automatically deployed through GitHub Actions when changes are pushed to the main branch or feature branches. The pipeline includes:

1. Linting
2. TypeScript compilation
3. Unit testing
4. Terraform deployment
5. Smoke testing

For feature branches, only the build and test steps are executed.

## Environment Variables

- `AWS_ACCESS_KEY_ID`: AWS access key for deployment
- `AWS_SECRET_ACCESS_KEY`: AWS secret key for deployment
- `REACT_APP_API_URL`: API endpoint URL for the frontend

## Testing

- Frontend: React Testing Library
- Backend: Jest
- Smoke Tests: Selenium WebDriver

## License

MIT 