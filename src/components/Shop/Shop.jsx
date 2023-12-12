import { useState } from "react";
import Product from "../Product/Product";
import { useEffect } from "react";
import DeleteIcon from '../../images/DeleteIcon.svg'
import ArrowIcon from '../../images/Arrow.svg'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(0)
    const [tax, setTax] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart)

        newCart.map(item => {
            const totalPrice = item.price + total;
            setTotal(totalPrice);

            const shippingCost = newCart.length * 5;
            setShipping(shippingCost);

            const tax = (totalPrice + shippingCost) * 0.1;
            setTax(tax.toFixed(2));

            const grandTotal = totalPrice + shippingCost + tax;
            setGrandTotal(grandTotal.toFixed(2))
        })
    }

    const restCart = () => {
        setCart([]);
        setTotal(0);
        setTax(0);
        setShipping(0);
        setGrandTotal(0);
    } 
        
    return (
        <div className="container mx-auto px-8">
            <div className="grid grid-cols-[4fr_1fr]">
                <div className="grid lg:grid-cols-3 gap-12 my-12">
                    {
                        products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
                    }
                </div>

                <div className="bg-[#FF99004D] rounded pt-[8%] py-7 px-4 h-full fixed right-0 top-0 z-0">
                    <h4 className="text-gray-800 text-[25px] text-center font-normal font-['Lato']">Order Summary</h4>
                    <div className="px-[7px] py-12">
                        <p className="text-slate-700 text-[17px] mb-6 font-normal font-['Lato'] tracking-tight">Selected Items: {cart.length}</p>
                        <p className="text-slate-700 text-[17px] mb-6 font-normal font-['Lato'] tracking-tight">Total Price: ${total}</p>
                        <p className="text-slate-700 text-[17px] mb-6 font-normal font-['Lato'] tracking-tight">Total Shipping Charge: ${shipping}</p>
                        <p className="text-slate-700 text-[17px] mb-6 font-normal font-['Lato'] tracking-tight">Tax: ${tax}</p>
                        <p className="text-neutral-900 text-[21px] mb-2 font-normal font-['Lato'] tracking-tight">Grand Total: ${grandTotal}</p>
                    </div>
                    <div className="text-center flex flex-col">
                        <button onClick={restCart} className="w-[232px] mb-4 h-12 bg-red-500 rounded text-white text-[17px] font-normal font-['Lato'] tracking-tight flex items-center justify-center gap-3">Clear Cart <img src={DeleteIcon} alt="" /></button>
                        <button className="w-[232px] h-12 bg-amber-500 rounded text-white text-[17px] font-normal font-['Lato'] tracking-tight flex items-center justify-center gap-3">Review Order <img src={ArrowIcon} alt="" /></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;