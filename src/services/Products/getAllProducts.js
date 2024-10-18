import { axiosInstance } from "../../api/axiosInstance";

export const getAllProducts = async (categories, title) => {
    try {
        const res = await axiosInstance.get('products/', { params:{ title, categoryId: categories }});
        return res.data;
    } catch (error) {
        if (error.response) throw error.response.data;
        else throw new error('Something went wrong');
    }
}