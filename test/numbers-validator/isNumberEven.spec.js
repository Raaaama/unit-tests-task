import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("isNumberEven", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it("should return true when provided with an even number", () => {
    expect(validator.isNumberEven(4)).to.equal(true);
  });

  it("should return false when provided with an odd number", () => {
    expect(validator.isNumberEven(5)).to.equal(false);
  });

  it("should return true when provided with 0", () => {
    expect(validator.isNumberEven(0)).to.equal(true);
  });

  it("should return true when provided with a negative even number", () => {
    expect(validator.isNumberEven(-4)).to.equal(true);
  });

  it("should return false when provided with a negative odd number", () => {
    expect(validator.isNumberEven(-5)).to.equal(false);
  });

  it("should throw an error when provided a string", () => {
    expect(() => {
      validator.isNumberEven("4");
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  it("should throw an error when provided an object", () => {
    expect(() => {
      validator.isNumberEven({});
    }).to.throw(
      '[[object Object]] is not of type "Number" it is of type "object"'
    );
  });

  it("should throw an error when provided an array", () => {
    expect(() => {
      validator.isNumberEven([]);
    }).to.throw('[] is not of type "Number" it is of type "object"');
  });

  it("should throw an error when provided null", () => {
    expect(() => {
      validator.isNumberEven(null);
    }).to.throw('[null] is not of type "Number" it is of type "object"');
  });

  it("should throw an error when provided undefined", () => {
    expect(() => {
      validator.isNumberEven(undefined);
    }).to.throw(
      '[undefined] is not of type "Number" it is of type "undefined"'
    );
  });
});
