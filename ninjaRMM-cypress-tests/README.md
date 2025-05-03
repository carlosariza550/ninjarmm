# NinjaRMM Cypress Tests

This project contains end-to-end tests for the NinjaRMM application using Cypress. The tests cover various functionalities for the login page.

## Project Structure

```
ninjaRMM-cypress-tests
├── cypress
│   ├── e2e
│   │   ├── login.spec.js          # Tests for login functionality
│   ├── fixtures
│   │   └── testData.json           # Test data for the login tests
│   ├── support
│       ├── commands.js              # Custom commands for tests
│       └── e2e.js                   # Global configurations for Cypress
├── cypress.config.js                # Cypress configuration file
├── package.json                     # npm configuration file
└── README.md                        # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd ninjaRMM-cypress-tests
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the tests**:
   You can run the tests using the following command:
   ```
   npx cypress open
   ```
   This will open the Cypress Test Runner where you can select and run the tests.

## Test Scenarios

- **Login Functionality**: Tests for verifying elements on the login page and testing successful and unsuccessful login attempts.
Trigger GitHub Actions
