import { axiosInstance } from "../../api/axiosInstance";

export const createUser = async (data) => {
  try {
    await axiosInstance.post("/users", data);
  } catch (error) {
    if (error.response)
      throw typeof error.response.data === "string"
        ? new Error(error.response.data)
        : error.response.data;
    else throw new Error('Something went wrong');
  }
};