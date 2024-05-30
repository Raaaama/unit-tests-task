import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("isInteger", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it("should return true if an integer", () => {
    expect(validator.isInteger(10)).to.equal(true);
  });

  it("should return false if not an integer", () => {
    expect(validator.isInteger(10.01)).to.equal(false);
  });

  it("should return true for negative integers", () => {
    expect(validator.isInteger(-10)).to.equal(true);
  });

  it("should throw error if provided with a string", () => {
    expect(() => {
      validator.isInteger("4");
    }).to.throw("[4] is not a number");
  });

  it("should throw an error when provided an object", () => {
    expect(() => {
      validator.isInteger({ a: 1 });
    }).to.throw("[[object Object]] is not a number");
  });

  it("should throw an error when provided null", () => {
    expect(() => {
      validator.isInteger(null);
    }).to.throw("[null] is not a number");
  });

  it("should throw an error when provided undefined", () => {
    expect(() => {
      validator.isInteger(undefined);
    }).to.throw("[undefined] is not a number");
  });
});
