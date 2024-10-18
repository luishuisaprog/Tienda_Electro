import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "../../services/Products/getAllCategories";

export const useCategories = () => {
    const query = useQuery({ queryKey: ['categories'], queryFn: getAllCategories });

    return query
}