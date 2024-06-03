import { useContext } from "react";
import { MainAppContext } from "../context/MainAppContext";
import { TProduct } from "../types";


const useMainAppContext = () => {
    const context = useContext(MainAppContext);

    const getCartItems = () => context?.products;

    const addToCart = (product: TProduct) => context?.dispatch({
        type: 'add_product',
        payload: product
    });

    const removeFromCart = (product: TProduct) => context?.dispatch({
        type: 'remove_products',
        payload: product
    });

    return {
        getCartItems,
        addToCart,
        removeFromCart
    };
};

export default useMainAppContext;