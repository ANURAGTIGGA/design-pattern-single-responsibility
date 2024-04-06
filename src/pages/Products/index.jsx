//import { useQuery } from '@tanstack/react-query';
import "./homepage.css";
import { useFetchProducts } from '../../hooks/useFetchProducts';
import Loader from "../../components/Loader";
import ErrorState from "../../components/ErrorState";
import ProductsList from "../../components/ProductsList";

export default function Products() {
    const { data, isFetching, error } = useFetchProducts();
    
    return (
        <div>
            <h1>Products Page</h1>
            {isFetching && <Loader/>}
            {error && <ErrorState/>}
            {data && ( <ProductsList products={data} />
                // <div>
                //     {data.map((product)=>{
                //         return <p key={product.id}>{product.title}</p>
                //     })}
                // </div>
            )}
        </div>
    )
}