# Testing Setup for EXP05

## 📋 Test Files Added

### 1. **Header.test.jsx** 
Location: `src/components/Header.test.jsx`

Simple component tests for the Header component:
- ✅ Renders Header component correctly
- ✅ Displays Login button when not authenticated
- ✅ Renders navigation links
- ✅ Verifies correct Material UI styling

Uses React Testing Library with BrowserRouter and AuthProvider.

### 2. **calculations.test.js**
Location: `src/utils/calculations.test.js`

Unit tests for carbon calculation utilities:
- ✅ `calculateTotalCarbon()` - Sums all carbon values
- ✅ `calculateAverageCarbon()` - Computes average with 2 decimals
- ✅ `filterHighCarbonActivities()` - Filters activities above threshold
- ✅ `findHighestCarbonActivity()` - Finds max carbon activity

Includes 12 test cases covering edge cases (empty arrays, thresholds, etc.)

## 🚀 Running Tests

### Run all tests:
```bash
npm test
```

### Watch mode (re-runs on file changes):
```bash
npm run test:watch
```

### Generate coverage report:
```bash
npm run test:coverage
```

## 📦 Testing Dependencies Required

To use these tests, you'll need to install:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @babel/preset-react babel-jest @babel/core
```

Or add to your package.json devDependencies:
```json
{
  "@babel/core": "^7.23.0",
  "@babel/preset-react": "^7.23.0",
  "@testing-library/jest-dom": "^6.1.4",
  "@testing-library/react": "^14.0.0",
  "babel-jest": "^29.7.0",
  "jest": "^29.7.0"
}
```

## 📁 Test Configuration Files

- **jest.config.js** - Jest configuration with jsdom environment
- **src/setupTests.js** - Test setup with Testing Library and localStorage mock

## 💡 Test Patterns Used

1. **Component Testing** - Using React Testing Library
2. **Unit Testing** - Testing pure calculation functions
3. **Mock Providers** - Using BrowserRouter and AuthProvider
4. **Snapshot Ready** - Can add snapshots anytime
5. **Descriptive Tests** - Clear test names explaining what's being tested

## ✅ Simple & Easy to Understand

These tests are intentionally simple for learning purposes. They demonstrate:
- How to render components with providers
- How to test component rendering
- How to test utility functions
- How to write clear, readable tests
- Best practices for testing React apps

## 🔄 Next Steps

Once dependencies are installed:
```bash
npm install
npm test
```

All 15+ tests should pass! 🎉
