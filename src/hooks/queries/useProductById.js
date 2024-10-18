import { useQuery } from "@tanstack/react-query"
import { getProductById } from "../../services/Products/getProductById";

export const useProductById = (productId) => {
    const query = useQuery({queryKey: ["product", productId], queryFn: () => getProductById(productId)});

    return query; 
}