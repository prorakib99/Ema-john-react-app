import { useState } from "react";
import Product from "../Product/Product";
import { useEffect } from "react";
import Cart from "../Cart/Cart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    const removeCart = () => setCart([])
    return (
        <div className="container mx-auto px-8">
            <div className="grid grid-cols-[4fr_1fr]">
                <div className="grid lg:grid-cols-3 gap-12 my-12">
                    {
                        products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
                    }
                </div>

                <div className="bg-[#FF99004D] rounded pt-[8%] py-7 h-screen px-4 fixed right-0 top-0">
                    <Cart removeCart={removeCart} cart={cart}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;