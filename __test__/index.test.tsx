import { render } from "@testing-library/react-native";

describe("Practice", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("promise success", async () => {
    const mock = jest.fn();

    mock.mockResolvedValue({
      name: "tanmay",
    });

    await expect(mock()).resolves.toEqual({ name: "tanmay" });
  });

  test("promise failure", async () => {
    const mock = jest.fn();

    mock.mockRejectedValue("API failed");

    await expect(mock()).rejects.toBe("API failed");
  });
});
