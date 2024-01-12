# Environment Variables

## Overview

Environment variables in Camphouse are key-value pairs that configure the application's runtime environment.

## Variables Description

Each variable has a specific function:

- `APP_PORT`: Port for the app (e.g., `3000`).
- `SESSION_SECRET`: A secret key for session security.
- ... (List continues with all variables)

## Best Practices

- **Security**: Keep secrets confidential and secure.
- **Management**: Update variables as needed for different environments.

## Troubleshooting

Common issues:

- Incorrect variable values leading to startup errors.
- Missing variables causing runtime failures.

---

For a full list of environment variables, see our [Configuration Guide](https://github.com/VMGWARE/Camphouse#configuration).
