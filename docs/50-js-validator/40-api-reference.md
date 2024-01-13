# API Reference

The JS Validator library provides a straightforward API with several methods and configurations. Here's a detailed overview:

## Constructor: `Validator(rules, messages, [options])`

- `rules`: Object defining validation rules for each field.
- `messages`: Object specifying custom error messages for validation failures.
- `options`: Optional configuration settings (e.g., strict mode).

## Methods

### `validate(input)`
Validates the provided input data against the defined rules.

### `getErrors()`
Returns an object containing validation errors.

### `getPassedFields()`
Retrieves an array of field names that passed validation.

### `reset()`
Resets the validator's

 internal state.

### `updateRules(rules)`
Updates the validation rules.

### `updateMessages(messages)`
Updates the custom error messages.

### `updateOptions(options)`
Modifies the validator's configuration options.