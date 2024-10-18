import { axiosInstance } from "../../api/axiosInstance";

export const deletePurchase = async (id, token) => {
  try {
    await axiosInstance.delete(`purchases/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error.response)
      throw typeof error.response.data === "string"
        ? new Error(error.response.data)
        : error.response.data;
    else throw new Error('Something went wrong');
  }
};