import { axiosInstance } from "../../api/axiosInstance";

export const addProductToCart = async ({ token, quantity, productId }) => {
    try {
        const body = { quantity, productId }
        await axiosInstance.post('carts', body, { headers: { Authorization: `Bearer ${token}`}});
    } catch (error) {
        if (error.response) throw error.response.data;
        else throw new error('Something went wrong');
    }
}