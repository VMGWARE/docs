# Environment Variables

## Overview

Environment variables in Camphouse are essential for configuring the application's runtime environment. They allow you to set up the application without hardcoding sensitive details like database credentials and secret keys.

## Backend Variables

### Application Configuration

- `APP_PORT`: Specifies the port number on which the Camphouse server will run. Default is `3000`.
- `SESSION_SECRET`: A secret key used for securing user sessions. Should be a random, long, and complex string.

### Database Configuration

- `DB_NAME`: Name of the MongoDB database used by Camphouse.
- `DB_HOST`: Hostname or IP address where your MongoDB is running.
- `DB_PORT`: Port number for the MongoDB server, usually `27017`.
- `DB_USER`: Username for accessing the MongoDB database.
- `DB_PASS`: Password for the specified MongoDB user.

### JWT (JSON Web Token)

- `JWT_SECRET`: Secret key used to sign and verify JSON Web Tokens. This is critical for secure authentication.

### Admin Configuration

- `ADMIN_HANDLE`: Unique handle for the initial admin account.
- `ADMIN_EMAIL`: Email address for the initial admin account.
- `ADMIN_PASSWORD`: Password for the initial admin account.
- `ADMIN_USERNAME`: Username for the initial admin account.

### Sentry (Error Tracking)

- `SENTRY_DSN`: Data Source Name for Sentry, used for tracking application errors and monitoring.

### Storage Configuration

- `MINIO_USE_SSL`: Boolean value (`true` or `false`) indicating whether to use SSL for MinIO server connections.
- `MINIO_ACCESS_KEY`: Access key for the MinIO server, used for object storage (like images).
- `MINIO_SECRET_KEY`: Secret key corresponding to the MinIO access key.
- `MINIO_BUCKET`: Name of the bucket in MinIO where files will be stored.
- `MINIO_ENDPOINT`: Endpoint URL for the MinIO server.
- `LOCAL_STORAGE`: Boolean value (`true` or `false`) determining whether to store files locally or in MinIO.

### Exceptionless (Error Monitoring)

- `EXCEPTIONLESS_API_KEY`: API key for integrating Exceptionless, a service for real-time error reporting.
- `EXCEPTIONLESS_SERVER_URL`: Server URL for Exceptionless.

### General Configuration

- `BLOCKED_IPS`: A list of IP addresses to block from accessing the application, useful for banning malicious users.

## Frontend Configuration

- `VUE_APP_GIT_VERSION`: This variable is used to specify the current version of the application, often linked to the Git commit hash. It helps in keeping track of the deployed version of the frontend application.

- `VUE_APP_EXCEPTIONLESS_API_KEY`: The API key for Exceptionless. This is used in the frontend to integrate Exceptionless for frontend error monitoring and reporting. It's essential for tracking frontend exceptions and improving user experience.

- `VUE_APP_EXCEPTIONLESS_SERVER_URL`: The server URL for Exceptionless. This accompanies the API key and is used to configure the endpoint where frontend error data is sent. It ensures that all frontend errors are properly reported and logged in your Exceptionless dashboard.

## Best Practices

- **Security**: Always keep your secret keys confidential. Avoid committing `.env` files to version control.
- **Environment-Specific Configuration**: Use different environment variables for development, testing, and production environments.

## Troubleshooting

Common issues related to environment variables include:

- Application failing to start due to missing or incorrect values.
- Security vulnerabilities if sensitive variables are exposed.

---

For a more comprehensive overview, refer to our [Configuration Guide](https://github.com/VMGWARE/Camphouse#configuration).
