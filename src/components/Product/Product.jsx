import CartPlus from '../../images/cart-plus.svg'
const Product = props => {
    const {name, img, ratings, price, seller} = props.product;
    const cartClick = props.addToCart;

    return (
        <div className="w-full h-[508px]">
            <div className="rounded-lg border border-gray-400">
                <img className="w-full h-[286px] rounded-2xl p-[7px]" src={img} />

                <div className="mx-[14px] mt-3">
                    <h5 className="text-neutral-900 mb-2 text-[21px] font-normal font-['Lato'] tracking-tight">{name.substring(0, 25)}</h5>
                    <p className="text-neutral-900 text-[17px] font-normal font-['Lato'] tracking-tight">Price: ${price}</p>
                    <p className="text-slate-700 text-sm mt-8 font-normal font-['Lato'] tracking-tight">Manufacturer : {seller}</p>
                    <p className="text-slate-700 mt-[11px] text-sm font-normal font-['Lato'] tracking-tight">Rating : {ratings} Stars
                    </p>
                </div>

                <button onClick={() => cartClick(props.product)} className="w-full h-12 mt-[13px] bg-orange-200 rounded-bl-lg rounded-br-lg border border-gray-400  text-neutral-900 text-[15px] font-bold font-['Lato'] tracking-tight hover:bg-orange-500 focus:bg-green-600 flex justify-center items-center gap-2">Add to Cart <img src={CartPlus} alt="" /></button>
            </div>
        </div>
    );
};

export default Product;