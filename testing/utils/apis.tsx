import axios, { Axios, AxiosError } from "axios";

export async function fetchUser(id: number) {
  try {
    const response = await axios.get(`https://someapi/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error("Failed to fetch data: " + error?.message);
  }
}

export async function createUser(user: any) {
  try {
    const response = await axios.post(`https://someapi/user`, user);
    return response.data;
  } catch (error: any) {
    throw new Error("Failed to create user: " + error?.message);
  }
}
