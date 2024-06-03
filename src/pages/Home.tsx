import { useEffect } from "react";
import useApis from "../hooks/useApis";
import { TProduct } from "../types";
import ProductCard from "../components/ProductCard";

const Home = () => {

    const { callGetApi, apiState } = useApis();

    useEffect(() => {
        callGetApi('https://fakestoreapi.com/products');
    }, []);

    return (
        <div>
            <h2>{'Top products'}</h2>
            {apiState?.state === 'loading' && <p>Loading please wait</p>}
            {apiState?.state === 'error' && <p>Something went wrong, please try later</p>}
            {apiState?.state === 'success' && apiState.data.map((product: TProduct) => <ProductCard key={product.id} prodcut={product} />)}
        </div>
    );
};

export default Home;