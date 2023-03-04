import { Launcher } from "../src";
import { DiscountRules } from "../src/DiscountRules/discount";
import { Products } from "../src/Products/product";

//Mock the the internal classes
jest.mock("../src/Products/product");
jest.mock("../src/DiscountRules/discount");

let app: Launcher;

beforeEach(() => {
  app = new Launcher();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Launcher test suite - Test constructor()", () => {
  test("Seed App", () => {
    const mockedProducts = jest.mocked(Products, { shallow: true });
    const mockedRules = jest.mocked(DiscountRules, { shallow: true });
    new Launcher();
    expect(mockedProducts).toBeCalled();
    expect(mockedRules).toBeCalled();
  });
});

describe("", () => {
  test("Should return valid total, replacing the implementation of a method", () => {
    jest.spyOn(app, "processData").mockImplementation(() => {
      return 304;
    });
    const inputs = ["APE", "PUNK", "APE", "APE", "MEEBIT", "PUNK", "PUNK"];
    const total = app.processData(inputs);
    expect(304).toEqual(total);
  });
  test("Should return invalid result", () => {
    jest.spyOn(app, "processData").mockImplementation(() => {
      return 100;
    });
    const inputs = ["APE", "PUNK", "MEEBIT"];
    const total = app.processData(inputs);
    expect(304).not.toEqual(total);
  });
  test("Should return 0 as there is no input", () => {
    const processData = jest.spyOn(app, "processData");
    const total = app.processData([]);
    expect(0).toEqual(total);
    expect(processData).toBeCalled();
  });
});
