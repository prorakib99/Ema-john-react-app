import Trash from '../../images/trash-alt.svg'

const CartItem = () => {
    return (
        <div>
            <div className="w-[571px] h-[107px] rounded-lg border flex items-center justify-between border-gray-400">
                <div className="flex gap-2">
                    <img className="rounded-md m-[8px]" src="https://via.placeholder.com/91x91" />
                    <div className='my-3'>
                        <div className="text-gray-800 text-[21px] font-normal font-['Lato'] tracking-tight">Ultraboost 22 Shoes</div>
                        <p className="text-gray-800 text-[15px] font-normal font-['Lato'] tracking-tight">Price: <span className="text-amber-500 text-[15px] font-normal font-['Lato'] tracking-tight">$190 </span>
                        </p>
                        <p className="text-slate-700 text-[15px] font-normal font-['Lato'] tracking-tight">Shipping Charge : <span className="text-amber-500 text-[15px] font-normal font-['Lato'] tracking-tight">$5</span></p>

                    </div>
                </div>
                <button className='w-[55px] h-[55px] me-6 bg-rose-500 bg-opacity-30 rounded-full flex items-center justify-center'>
                    <img src={Trash} alt="" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
