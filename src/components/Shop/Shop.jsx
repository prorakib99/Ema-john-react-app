import { useState } from 'react';
import Product from '../Product/Product';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import ArrowIcon from '../../images/Arrow.svg';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartCheck, setCartCheck] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const { totalProducts } = useLoaderData();

    const itemsPerPage = 12;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // const pageNumbers = [...Array(totalPages).keys()];
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${currentPage}&limit=${itemsPerPage}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const ids = Object.keys(storedCart);

        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then((res) => res.json())
            .then((cartProducts) => {
                const addProducts = [];
                for (const id in storedCart) {
                    const findCartProduct = cartProducts.find((product) => product._id === id);

                    if (findCartProduct) {
                        const quantity = storedCart[id];
                        findCartProduct.quantity = quantity;
                        addProducts.push(findCartProduct);
                    }
                }
                setCart(addProducts);
            });
    }, []);

    // Success Toast Add
    const addSuccess = () => toast.success('Added Successful');
    const addToCart = (product) => {
        let newCart = [];

        const exits = cart.find((cartPd) => cartPd._id === product._id);

        if (!exits) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            product.quantity = exits.quantity + 1;
            const remaining = cart.filter((cartPd) => cartPd._id !== product._id);
            newCart = [...remaining, exits];
        }

        setCart(newCart);
        addSuccess();
        addToDb(product._id);
    };

    const removeCart = () => {
        setCart([]);
        deleteShoppingCart();
    };

    const reviewOrder = () => {
        if (!cart.length) {
            toast.error('Cart Empty!');
            setCartCheck(false);
            return;
        }
        setCartCheck(true);
    };

    return (
        <div className='container mx-auto px-8'>
            <div className='md:grid flex flex-col-reverse md:grid-cols-[4fr_1fr]'>
                <div>
                    <div className='grid lg:grid-cols-3 gap-12 my-12'>
                        {products.map((product) => (
                            <Product
                                addToCart={addToCart}
                                key={product._id}
                                product={product}
                            ></Product>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className='text-center'>
                        <p>Current Page: {currentPage}</p>
                        <div className='flex gap-3 mb-10 mt-5 justify-center'>
                            {pageNumbers.map((number) => (
                                <button
                                    onClick={() => setCurrentPage(number)}
                                    className={`bg-slate-300 border px-3 py-1 border-green-300 rounded-md ${
                                        currentPage === number ? 'bg-yellow-500 text-white' : ''
                                    }`}
                                    key={number}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='bg-[#FF99004D] rounded pt-[8%] py-7 h-screen px-4 md:fixed right-0 top-0'>
                    <Cart removeCart={removeCart} cart={cart}></Cart>

                    <Link to={cartCheck ? '/order' : ''}>
                        <button
                            onMouseEnter={reviewOrder}
                            className="w-[232px] h-12 bg-amber-500 rounded text-white text-[17px] font-normal font-['Lato'] tracking-tight flex items-center justify-center gap-3"
                        >
                            Review Order <img src={ArrowIcon} alt='' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shop;
