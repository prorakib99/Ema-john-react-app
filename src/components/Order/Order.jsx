import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
    const cartProduct = useLoaderData();
    const [updateCart, setUpdateCart] = useState(cartProduct);

    const deleteCart = id => {
        const restCart = updateCart.filter(cart => cart.id !== id)
        removeFromDb(id);
        setUpdateCart(restCart)
    }

    return (
        <div className="container mx-auto px-8">
            <div className="grid grid-cols-[2fr_1fr] my-16">
                <div>
                    {
                        updateCart.map((cart, index) => <CartItem key={index} cart={cart} deleteCart={deleteCart}></CartItem>)
                    }
                </div>
                <div className="bg-yellow-500">
                    <Cart cart={updateCart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Order;