# Usage Guide

JS Validator can be used in both JavaScript and TypeScript projects. Below are examples demonstrating how to use it in each scenario.

## JavaScript Usage

Here's a basic example to validate a user registration form in JavaScript:

```javascript
const Validator = require("@vmgware/js-validator");

const rules = {
  username: { type: "string", required: true, min: 3 },
  email: { type: "string", required: true, validate: "email" },
  age: { type: "number", min: 18 },
};

const messages = {
  username: {
    required: "Username is required",
    min: "Username must be at least 3 characters",
  },
  // ... more custom messages
};

const validator = new Validator(rules, messages);

const userData = { username: "johndoe", email: "john@example.com", age: 20 };

validator.validate(userData).then((isValid) => {
  if (isValid) {
    console.log("Registration valid");
  } else {
    console.log("Validation errors:", validator.getErrors());
  }
});
```

## TypeScript Usage

For TypeScript, you can define interfaces for your data, making the code more robust:

```typescript
import Validator from "@vmgware/js-validator";

interface UserProfile {
  username: string;
  email: string;
  birthdate: Date;
}

const rules = {
  username: { type: "string", required: true, min: 3 },
  email: { type: "string", required: true, validate: "email" },
  birthdate: { type: "date", required: true },
};

const messages = {
  // ... custom error messages
};

const validator = new Validator<UserProfile>(rules, messages);

const userProfile: UserProfile = {
  username: "janedoe",
  email: "jane@example.com",
  birthdate: new Date("1990-01-01"),
};

validator.validate(userProfile).then((isValid) => {
  if (isValid) {
    console.log("User profile is valid");
  } else {
    console.log("Validation errors:", validator.getErrors());
  }
});
```
