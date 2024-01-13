# Strict Mode

Strict mode ensures that all fields in the input are explicitly defined in the validation rules, enhancing data integrity.

## Enabling Strict Mode

```javascript
const options = { strictMode: true };
const validator = new Validator(rules, messages, options);

// In strict mode, any undefined field in the input will result in a validation error.
```

Use strict mode to prevent unexpected or unwanted data fields.