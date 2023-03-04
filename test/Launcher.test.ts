import { Launcher } from "../src";
import { DiscountRules } from "../src/DiscountRules/discount";
import { Products } from "../src/Products/product";

//Mock the classes
jest.mock("../src/Products/product");
jest.mock("../src/DiscountRules/discount");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Launcher test suite - Test constructor()", () => {
  const mockedProducts = jest.mocked(Products, { shallow: true });
  const mockedRules = jest.mocked(DiscountRules, { shallow: true });
  test("Seed App", () => {
    new Launcher();
    expect(mockedProducts).toBeCalled();
    expect(mockedRules).toBeCalled();
  });
});
