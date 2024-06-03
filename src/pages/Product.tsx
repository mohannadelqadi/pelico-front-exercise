import { Link, useParams } from "react-router-dom";
import useApis from "../hooks/useApis";
import { useEffect } from "react";
import { TProduct } from "../types";
import useMainAppContext from "../hooks/useMainAppContext";

const Product = () => {
    const param = useParams();
    const { callGetApi, apiState } = useApis();
    const { addToCart } = useMainAppContext();

    const { id } = param;

    useEffect(() => {
        callGetApi(`https://fakestoreapi.com/products/${id}`);
    }, []);

    console.log(apiState);

    let productDetails: TProduct | null = null;

    if (apiState?.state === 'success' && apiState?.data) {
        productDetails = apiState?.data;
    }

    return (
        <div>
            {apiState?.state === 'loading' && <p>Loading please wait</p>}
            {apiState?.state === 'error' && <p>Something went wrong, please try later</p>}
            {apiState?.state === 'success' && productDetails !== null && <div>
                <div>
                    <div>
                        <div>
                            <img width={'150px'} src={productDetails.image} title={productDetails.title} alt={productDetails.title} />
                        </div>
                        <div>
                            <h2>{productDetails.title}</h2>
                            <p>{productDetails.price}</p>
                        </div>
                    </div>
                    <button onClick={() => {
                        if (productDetails !== null) {
                            addToCart(productDetails);
                        }
                    }}>Add to my cart</button>

                    <p>{productDetails.description}</p>
                </div>
            </div>}
        </div>
    )

};

export default Product;
