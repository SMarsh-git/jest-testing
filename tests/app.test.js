const app = require("../app.js");

describe("Should add two numbers together", () => {
  test("Should equal 5 when passed 2 and 3", () => {
    expect(app.add(2, 3)).not.toBe(10);
  });
  test("Should equal 100 when adding 50 and 50", () => {
    expect(app.add(50, 50)).toBe(100);
  });
});

it("should include the name Dave", () => {
  expect(app.myArray).toContain("Dave");
});

it("should not include null value", () => {
    expect(app.myArray).not.toContain(null);
  });

it("should include a truthy value", () => {
  expect(app.truthy).toBe(true)
});

it("should not include a falsy value", () => {
  expect(app.truthy).toBe(true)
});

describe("Should check for prime numbers", () => {
    test("i should be a boolean value", () => {
      expect(app.isPrime(5)).toBe(true || false);
    });
    test("i should return true as a prime", () => {
      expect(app.isPrime(5)).toBe(true);
    });
  });
  


describe('should return items with 6 or more characters', () => {
  it('should return correct items given array of elements containing 6 or more characters', () => {
    const input = ['javascript', 'element', 'html', 'selector', 'css', 'DOM'];
    expect(app.getItems(input)).toContain('javascript', 'selector', 'element');
    expect(app.getItems(input)).not.toContain('html', 'css', 'DOM');
  });
  it('should return no items given array of elements not containing 6 or more characters', () => {
    const input = ['html', 'css', 'DOM'];
    expect(app.getItems(input).length).toBe(0);
  });
});