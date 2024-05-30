import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("getEvenNumbersFromArray", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it("should return even numbers from an array", () => {
    expect(
      validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ).to.deep.equal([2, 4, 6, 8]);
  });

  it("should return an empty array when provided an empty array", () => {
    expect(validator.getEvenNumbersFromArray([])).to.deep.equal([]);
  });

  it("should return the same array when all numbers are even", () => {
    expect(validator.getEvenNumbersFromArray([2, 4, 6, 8])).to.deep.equal([
      2, 4, 6, 8,
    ]);
  });

  it("should return an empty array when there are no even numbers", () => {
    expect(validator.getEvenNumbersFromArray([1, 3, 5, 7, 9])).to.deep.equal(
      []
    );
  });

  it("should throw an error when the array contains non-number elements", () => {
    expect(() => {
      validator.getEvenNumbersFromArray([1, "2", 3]);
    }).to.throw('[1,2,3] is not an array of "Numbers"');
  });

  it("should throw an error when provided a number", () => {
    expect(() => {
      validator.getEvenNumbersFromArray(1);
    }).to.throw('[1] is not an array of "Numbers"');
  });

  it("should throw an error when provided a string", () => {
    expect(() => {
      validator.getEvenNumbersFromArray("1");
    }).to.throw('[1] is not an array of "Numbers"');
  });

  it("should throw an error when provided an object", () => {
    expect(() => {
      validator.getEvenNumbersFromArray({ a: 1 });
    }).to.throw('[[object Object]] is not an array of "Numbers"');
  });

  it("should throw an error when provided null", () => {
    expect(() => {
      validator.getEvenNumbersFromArray(null);
    }).to.throw('[null] is not an array of "Numbers"');
  });

  it("should throw an error when provided undefined", () => {
    expect(() => {
      validator.getEvenNumbersFromArray(undefined);
    }).to.throw('[undefined] is not an array of "Numbers"');
  });
});
