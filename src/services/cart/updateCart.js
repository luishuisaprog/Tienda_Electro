import { axiosInstance } from "../../api/axiosInstance";

export const updateCart = async ({ cartProductId, newQuantity, token }) => {
    try {
        const body = {quantity: newQuantity};
        await axiosInstance.put(`carts/${cartProductId}`, body, {headers: {Authorization: `Bearer ${token}`}});
    } catch (error) {
        if (error.response) throw error.response.data;
        else throw new error('Something went wrong');
    }
}