import { Link } from "react-router-dom";
import { TProduct, TUserProduct } from "../types";

const ProductCard = ({ prodcut }: { prodcut: TProduct | TUserProduct }) => {
    return (
        <Link to={`/product/${prodcut.id}`}>
            <div className="product-card">
                <div>
                    <img width={'150px'} src={prodcut.image} title={prodcut.title} alt={prodcut.title} />
                </div>
                <div>
                    <h2>
                        {prodcut.title}
                    </h2>
                    <p>${prodcut.price.toFixed(2)}</p>
                    {Object.hasOwn(prodcut, 'quantity') && <div>
                        <p>Quantity: {(prodcut as TUserProduct).quantity}</p>
                        <p>Total: {'$' + ((prodcut as TUserProduct).quantity * prodcut.price).toFixed(2)}</p>
                    </div>}
                    <p>{prodcut.description}</p>
                </div>
            </div>
        </Link>
    )
};

export default ProductCard;