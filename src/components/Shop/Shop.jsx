import Product from "../Product/Product";

const Shop = () => {
    return (
        <div>
            <div className="w-[1440px] h-[1024px] relative bg-white">
                <div className="w-44 left-[1221px] top-[108px] absolute text-gray-800 text-[25px] font-normal font-['Lato']">Order Summary</div>
                <div className="w-[179px] left-[1199px] top-[188px] absolute text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Selected Items: 6</div>
                <div className="w-[171px] left-[1199px] top-[233px] absolute text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Total Price: $1140</div>
                <div className="w-[243px] left-[1199px] top-[278px] absolute text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Total Shipping Charge: $5</div>
                <div className="w-36 left-[1199px] top-[323px] absolute text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Tax: $114</div>
                <div className="w-[236px] left-[1199px] top-[368px] absolute text-neutral-900 text-[21px] font-normal font-['Lato'] tracking-tight">Grand Total: $1559</div>
                <div className="w-[232px] h-12 left-[1192px] top-[514px] absolute">
                    <div className="w-[232px] h-12 left-0 top-0 absolute bg-amber-500 rounded" />
                    <div className="w-[103px] h-[21px] left-[61px] top-[13px] absolute text-white text-[17px] font-normal font-['Lato'] tracking-tight">Review Order</div>
                    <div className="w-[26px] h-[26px] px-[2.17px] py-[2.44px] left-[170px] top-[12px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="w-[232px] h-12 left-[1192px] top-[450px] absolute">
                    <div className="w-[232px] h-12 left-0 top-0 absolute bg-red-500 rounded" />
                    <div className="w-[78px] h-[21px] left-[72px] top-[14px] absolute text-white text-[17px] font-normal font-['Lato'] tracking-tight">Clear Cart</div>
                    <div className="w-6 h-6 px-[3.25px] py-0.5 left-[154px] top-[13px] absolute justify-center items-center inline-flex" />
                </div>
                <Product></Product>
            </div>
        </div>
    );
};

export default Shop;