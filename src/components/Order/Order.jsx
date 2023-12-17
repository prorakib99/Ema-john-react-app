import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";
import ArrowIcon from '../../images/Arrow.svg';
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
    const cartProduct = useLoaderData();
    const [updateCart, setUpdateCart] = useState(cartProduct);

    const deleteCart = id => {
        const restCart = updateCart.filter(cart => cart.id !== id)
        removeFromDb(id);
        setUpdateCart(restCart)
    }
    const removeCart = () => {
        setUpdateCart([]);
        deleteShoppingCart();
    }

    return (
        <div className="container mx-auto px-8">
            <div className="grid grid-cols-[2fr_1fr] gap-36 my-28">
                <div>
                    {
                        updateCart.map((cart, index) => <CartItem key={index} cart={cart} deleteCart={deleteCart}></CartItem>)
                    }
                </div>
                <div className="bg-[#FF99004D] p-8 rounded-lg">
                    <Cart cart={updateCart} removeCart={removeCart}>
                        <Link to='/checkout'>
                            <button className="w-[232px] h-12 bg-amber-500 rounded text-white text-[17px] font-normal font-['Lato'] tracking-tight flex items-center justify-center gap-3">Proceed Checkout <img src={ArrowIcon} alt="" /></button>
                        </Link>
                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Order;