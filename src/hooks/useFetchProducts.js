import { useQuery } from '@tanstack/react-query'

//TODO: move to api folder or equivalent
const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

export const useFetchProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
}