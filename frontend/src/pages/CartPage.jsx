// src/pages/CartPage.jsx
import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../services/cartService";
import { resolveImageUrl } from "../utils/resolveImageUrl";

export default function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cart.length === 0) {
        return <h1 className="text-center">Cart is empty</h1>;
    }

    return (
        <div className="container">
            <h2>My Cart</h2>

            {cart.map((item) => (
                <div
                    key={item.productId}
                    className="d-flex justify-content-between mb-2"
                >
                    <img
                        src={resolveImageUrl(item.img)}
                        className="card-img-top img-fluid"
                        alt={item.name}
                    />
                    <div>
                        <strong>{item.name}</strong>
                        <p>Qty: {item.quantity}</p>
                    </div>
                    <div>
                        <p>Rp {item.price * item.quantity}</p>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                                removeFromCart(item.productId);
                                setCart(getCart());
                            }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <hr />
            <h4>Total: Rp {total}</h4>
        </div>
    );
}
