import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("isAllNumbers", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it("should return true if array is of numbers", () => {
    expect(validator.isAllNumbers([1, 2, 3])).to.equal(true);
  });

  it("should return false if array is not of numbers", () => {
    expect(validator.isAllNumbers([1, "2", 3])).to.equal(false);
  });

  it("should throw an error when provided a string", () => {
    expect(() => {
      validator.isAllNumbers("1");
    }).to.throw("[1] is not an array");
  });

  it("should throw an error when provided a number", () => {
    expect(() => {
      validator.isAllNumbers(1);
    }).to.throw("[1] is not an array");
  });

  it("should throw an error when provided an object", () => {
    expect(() => {
      validator.isAllNumbers({ a: 1 });
    }).to.throw("[[object Object]] is not an array");
  });

  it("should throw an error when provided null", () => {
    expect(() => {
      validator.isAllNumbers(null);
    }).to.throw("[null] is not an array");
  });

  it("should throw an error when provided undefined", () => {
    expect(() => {
      validator.isAllNumbers(undefined);
    }).to.throw("[undefined] is not an array");
  });
});
