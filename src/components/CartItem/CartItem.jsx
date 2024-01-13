import Trash from '../../images/trash-alt.svg'

const CartItem = ({cart, deleteCart}) => {
    const {_id, name, price, shipping, img} = cart;
    const removeCart = deleteCart;
    return (
        <>
            <div className="h-[107px] rounded-lg border mb-6 flex items-center justify-between border-gray-400">
                <div className="flex gap-2">
                    <img className="w-[91px] h-[91px] rounded-md m-[8px]" src={img} />
                    <div className='my-3'>
                        <div className="text-gray-800 text-[21px] font-normal font-['Lato'] tracking-tight">{name}</div>
                        <p className="text-gray-800 text-[15px] font-normal font-['Lato'] tracking-tight">Price: <span className="text-amber-500 text-[15px] font-normal font-['Lato'] tracking-tight">${price} </span>
                        </p>
                        <p className="text-slate-700 text-[15px] font-normal font-['Lato'] tracking-tight">Shipping Charge : <span className="text-amber-500 text-[15px] font-normal font-['Lato'] tracking-tight">${shipping}</span></p>

                    </div>
                </div>
                <button onClick={() => removeCart(_id)} className='w-[55px] h-[55px] me-6 bg-rose-500 bg-opacity-30 rounded-full flex items-center justify-center'>
                    <img src={Trash} alt="" />
                </button>
            </div>
        </>
    );
};

export default CartItem;
