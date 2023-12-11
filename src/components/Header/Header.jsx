import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="w-full h-20 bg-gray-800 relative flex-col justify-start items-start inline-flex">
                <div className="container mx-auto px-8">
                    <div className='h-20 flex justify-between items-center'>
                        <div className="h-[42.46px] relative">
                            <img src={logo} alt="" />
                        </div>
                        <nav>
                            <ul className='navigation flex gap-8'>
                                <li><a className='text-white text-[17px] font-normal font-["Lato"] tracking-tight' href="/order">Order</a></li>
                                <li><a className='text-white text-[17px] font-normal font-["Lato"] tracking-tight' href="/order-review">Order Review</a></li>
                                <li><a className='text-white text-[17px] font-normal font-["Lato"] tracking-tight' href="/inventory">Inventory</a></li>
                                <li><a className='text-white text-[17px] font-normal font-["Lato"] tracking-tight' href="/login">Login</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;