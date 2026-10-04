import { createUser, fetchUser } from "@/utils/apis";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("mock api", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("mock get data", async () => {
    const mockData = { name: "tanmay", age: 23 };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });
    const result = await fetchUser(18);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith("https://someapi/18");

    expect(result).toEqual(mockData);
  });

  test("mock network error", async () => {
    const mockError = "Network Error";
    mockedAxios.get.mockRejectedValueOnce(new Error(mockError));

    await expect(fetchUser(123)).rejects.toThrow(
      "Failed to fetch data: Network Error",
    );

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith("https://someapi/123");
  });

  test("mock post data", async () => {
    const userData = { name: "tanmay", age: 23 };
    const mockedData = { id: 123, ...userData };

    mockedAxios.post.mockResolvedValueOnce({ data: mockedData });
    const result = await createUser(userData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("https://someapi/user", userData);
    expect(result).toEqual(mockedData);
  });

  test("mock fail post data", async () => {
    const userData = { name: "tanmay", age: 23 };
    const mockError = "Network Error";

    mockedAxios.post.mockRejectedValueOnce(new Error(mockError));

    await expect(createUser(userData)).rejects.toThrow(
      "Failed to create user: " + mockError,
    );
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("https://someapi/user", userData);
  });
});
