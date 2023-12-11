
const Product = () => {
    return (
        <div>
            <div className="container mx-auto px-8">
                <div className="w-[300px] h-[508px] relative">
                    <div className="rounded-lg border border-gray-400">
                        <img className="w-[286px] h-[286px] rounded-lg m-[7px]" src="https://via.placeholder.com/286x286" />

                        <div className="mx-[14px] mt-3">
                            <h5 className="text-neutral-900 text-[21px] font-normal font-['Lato'] tracking-tight">Ultraboost 22 Shoes</h5>
                            <p className="text-neutral-900 text-[17px] font-normal font-['Lato'] tracking-tight">Price: $190
                            </p>
                            <p className="text-slate-700 text-xs mt-8 font-normal font-['Lato'] tracking-tight">Manufacturer : Addidas
                            </p>
                            <p className="text-slate-700 mt-[11px] text-xs font-normal font-['Lato'] tracking-tight">Rating : 3 start
                            </p>
                        </div>

                        <button className="w-[298px] h-12 mt-[13px] bg-orange-200 rounded-bl-lg rounded-br-lg border border-gray-400 border-none                         text-neutral-900 text-[15px] font-normal font-['Lato'] tracking-tight">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;