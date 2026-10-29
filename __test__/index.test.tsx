import Index from "@/testing/components";
import { render, screen, userEvent } from "@testing-library/react-native";

describe("Practice", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("mock", async () => {
    const mock = jest.fn();

    mock("tanmay");
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith("tanmay");
  });

  test("mock 2", async () => {
    const mock = jest.fn();
    const name = "eren";
    mock.mockReturnValue(name);
    expect(mock(name)).toBe(name);
    expect(mock).toHaveBeenCalledWith(name);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  test("mock 3", async () => {
    const mock = jest.fn();
    mock.mockImplementation((num1, num2) => {
      return num1 + num2;
    });
    expect(mock(1, 2)).toBe(3);
    expect(mock).toHaveBeenCalledWith(1, 2);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
