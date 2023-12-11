import Trash from '../../images/trash-alt.svg'

const CartItem = () => {
    return (
        <div>
            <div className="w-[571px] h-[107px] rounded-lg border flex border-gray-400">
                <img className="rounded-md m-[8px]" src="https://via.placeholder.com/91x91" />
                <div className="">
                    <span className="text-slate-700 text-[15px] font-normal font-['Lato'] tracking-tight">Shipping Charge : </span>
                    <div className="text-gray-800 text-[21px] font-normal font-['Lato'] tracking-tight">Ultraboost 22 Shoes</div>
                    <div className="left-[116px] top-[46px] absolute">
                        <span className="text-gray-800 text-[15px] font-normal font-['Lato'] tracking-tight">Price: </span>
                        <span className="text-amber-500 text-[15px] font-normal font-['Lato'] tracking-tight">$190 </span>
                    </div>
                </div>
                <img src={Trash} className='w-[55px] h-[55px] bg-rose-500 bg-opacity-30 rounded-full' alt="" />
            </div>
        </div>
    );
};

export default CartItem;