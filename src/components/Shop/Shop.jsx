import { useState } from "react";
import Product from "../Product/Product";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import ArrowIcon from '../../images/Arrow.svg';
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartCheck, setCartCheck] = useState(false);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const addProducts = []
        for (const id in storedCart) {
            const findCartProduct = products.find(product => product.id === id);

            if (findCartProduct) {
                const quantity = storedCart[id];
                findCartProduct.quantity = quantity;
                addProducts.push(findCartProduct)
            }
        }
        setCart(addProducts);
    }, [products])

    // Success Toast Add
    const addSuccess = () => toast.success('Added Successful');
    const addToCart = product => {
        let newCart = [];

        const exits = cart.find(cartPd => cartPd.id === product.id);

        if (!exits) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            product.quantity = exits.quantity + 1;
            const remaining = cart.filter(cartPd => cartPd.id !== product.id);
            console.log(remaining);
            newCart = [...remaining, exits];
        }

        setCart(newCart)
        addSuccess()
        addToDb(product.id)
    }

    const removeCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const reviewOrder = () => {

        if (!cart.length) {
            toast.error("Cart Empty!");
            return;
        }
        setCartCheck(true)
    }
    return (
        <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-[4fr_1fr]">
                <div className="grid lg:grid-cols-3 gap-12 my-12">
                    {
                        products.map(product => <Product addToCart={addToCart} key={product.id} product={product} setCartCheck={setCartCheck}></Product>)
                    }
                </div>

                <div className="bg-[#FF99004D] rounded pt-[8%] py-7 h-screen px-4 md:fixed right-0 top-0">
                    <Cart removeCart={removeCart} cart={cart}>

                    </Cart>

                    <Link to={cartCheck ? '/order' : ''}>
                        <button onClick={reviewOrder} className="w-[232px] h-12 bg-amber-500 rounded text-white text-[17px] font-normal font-['Lato'] tracking-tight flex items-center justify-center gap-3">Review Order <img src={ArrowIcon} alt="" /></button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Shop;