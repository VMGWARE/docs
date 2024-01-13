# Asynchronous Validation

Asynchronous validation is useful for cases like checking availability of usernames or validating data against a database.

## Example: Checking Username Availability

```javascript
async function isUsernameAvailable(username) {
  // Implement check logic (e.g., database or API call)
}

const rules = {
  username: {
    // ... other rules,
    custom: async (username) => await isUsernameAvailable(username),
  },
  // ... other field rules
};

const messages = {
  username: {
    custom: "Username is already taken",
  },
  // ... other messages
};
```

This approach integrates asynchronous checks seamlessly into your validation workflow.