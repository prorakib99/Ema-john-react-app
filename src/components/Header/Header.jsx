import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className="z-10 w-full h-20 bg-gray-800 relative flex-col justify-start items-start inline-flex">
            <div className="container mx-auto px-8">
                <div className='h-20 flex justify-between items-center'>
                    <div className="h-[42.46px] relative">
                        <img src={logo} alt="" />
                    </div>
                    <nav>
                        <ul className='navigation flex gap-8'>
                            <li><Link className='text-white text-[17px] font-normal font-["Lato"] tracking-tight' to="/">Shop</Link></li>
                            <li><Link className='text-white text-[17px] font-normal font-["Lato"] tracking-tight' to="/order">Order Review</Link></li>
                            <li><Link className='text-white text-[17px] font-normal font-["Lato"] tracking-tight' to="/inventory">Inventory</Link></li>
                            <li><Link className='text-white text-[17px] font-normal font-["Lato"] tracking-tight' to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Header;