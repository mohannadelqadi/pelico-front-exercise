import ProductCard from "../components/ProductCard";
import useMainAppContext from "../hooks/useMainAppContext";

const Cart = () => {
    const { getCartItems, removeFromCart } = useMainAppContext();

    const cartItems = getCartItems() || [];

    return (
        <div>
            <h2>My Items</h2>
            {cartItems.length === 0 && <p>No items found in your cart</p>}
            {cartItems.length > 0 && cartItems.map(product => {
                return (
                    <div key={product.id}>
                        <ProductCard prodcut={product} />
                        <button onClick={() => {
                            removeFromCart(product);
                        }} >Rmove</button>
                    </div>
                )
            })}
        </div>
    )
};

export default Cart;