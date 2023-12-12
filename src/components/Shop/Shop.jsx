import { useState } from "react";
import Product from "../Product/Product";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const addProducts = []
        for(const id in storedCart){
            const findCartProduct = products.find(product => product.id === id);

            if(findCartProduct){
                const quantity = storedCart[id];
                findCartProduct.quantity = quantity;
                addProducts.push(findCartProduct)
            } 
        }
        setCart(addProducts);
    }, [products])


    const addToCart = product => {
        let newCart = [];

        const exits = cart.find(cartPd => cartPd.id === product.id);
        
        if(!exits){
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

        addToDb(product.id)
    }

    const removeCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
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