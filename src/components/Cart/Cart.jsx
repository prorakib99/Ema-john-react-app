
import DeleteIcon from '../../images/DeleteIcon.svg';
const Cart = ({ cart, removeCart, children }) => {

    let totalPrice = 0;
    let shipping = 0;
    let newQuantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
        newQuantity = newQuantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div>
            <h4 className="text-gray-800 text-[25px] text-center font-normal font-['Lato']">Order Summary</h4>
            <div className="px-[7px] py-12">
                <p className="text-slate-700 text-[17px] mb-6 font-normal font-['Lato'] tracking-tight">Selected Items: {newQuantity}</p>
                <p className="text-slate-700 text-[17px] mb-6 font-normal font-['Lato'] tracking-tight">Total Price: ${totalPrice}</p>
                <p className="text-slate-700 text-[17px] mb-6 font-normal font-['Lato'] tracking-tight">Total Shipping Charge: ${shipping}</p>
                <p className="text-slate-700 text-[17px] mb-6 font-normal font-['Lato'] tracking-tight">Tax: ${tax.toFixed(2)}</p>
                <p className="text-neutral-900 text-[21px] mb-2 font-normal font-['Lato'] tracking-tight">Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
            <div className="text-center flex flex-col">
                <button onClick={removeCart} className="w-[232px] mb-4 h-12 bg-red-500 rounded text-white text-[17px] font-normal font-['Lato'] tracking-tight flex items-center justify-center gap-3">Clear Cart <img src={DeleteIcon} alt="" /></button>
               {children}
            </div>
        </div>
    );
};

export default Cart;