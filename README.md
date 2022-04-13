# jest-testing
Initial practise using Jest as a testing enviroment for Javascript

These jest tests include the terms of:
test
expect
.not
.toBe()
.ToContain()
describe

For example:
it("should not include null value", () => {
    expect(app.myArray).not.toContain(null);
  });
  
This code should be ran with the jest node modules installed through NPM.
