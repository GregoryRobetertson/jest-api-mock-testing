# jest-api-mock-testing

## Installation

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies using npm:

## Running Tests

To run the tests, execute the following command in the project directory:


## Testing Approach

The testing approach for the User API involves using Jest, a popular JavaScript testing framework, along with Axios, a promise-based HTTP client for the browser and Node.js. 

1. **Unit Tests**: 
- The `getUser` function is tested using unit tests to ensure it behaves as expected under different scenarios.
- The `getUser` function makes an HTTP request to retrieve user data. 
- Mocking Axios allows us to control the behavior of the HTTP request, enabling us to test both success and failure cases.
- The first test case ensures that the function successfully retrieves user data when the HTTP request is successful. 
- The second test case validates the handling of errors for network issues or when the user is not found.

2. **Mocking Axios**:
- Axios is mocked using `jest.mock('axios')`, allowing us to intercept requests made by the `getUser` function.
- This enables us to simulate different scenarios such as successful responses and various error conditions.

3. **Asynchronous Testing**:
- Since the `getUser` function is asynchronous, `async/await` is used to handle asynchronous code within the tests.
- `await` is used to wait for the promise returned by `getUser` to resolve, allowing us to assert on the result.

4. **Error Handling**:
- Error handling is tested to ensure that appropriate errors are thrown and caught correctly.
- Different error scenarios such as network errors and user not found errors are tested to verify that the function behaves as expected in each case.

5. **Assertions**:
- Jest's `expect` function is used to make assertions about the returned user data and the thrown errors.
- The `toEqual` matcher is used to compare the retrieved user data with the expected data.
- The `rejects.toThrow` matcher is used to verify that the function throws the expected error.

By following these testing practices, we ensure that the User API functions correctly under various conditions and handles errors appropriately.
