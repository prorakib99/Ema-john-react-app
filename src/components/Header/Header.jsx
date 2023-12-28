import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { FaBarsStaggered } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';
const Header = () => {
    const [navStatus, setNavStatus] = useState(false);

    console.log(navStatus);
    return (
        <div className="z-10 w-full h-20 bg-gray-800 relative flex-col justify-start items-start inline-flex">
            <div className="container mx-auto px-8">
                <div className='h-20 flex justify-between items-center relative'>
                    <div className="h-[42.46px] relative">
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <nav className=''>
                    <p onClick={() => setNavStatus(!navStatus)} className='cursor-pointer block md:hidden'>
                        {navStatus ? <TfiClose className='text-white text-3xl' /> : <FaBarsStaggered className='text-white text-3xl' />}
                    </p>
                        <ul onClick={() => setNavStatus(false)} className={`navigation duration-500 text-center grid gap-5 md:flex md:gap-8 md:static absolute left-0 ${navStatus ? 'top-[130px]' : 'top-[-500px]'} md:bg-transparent md:py-0 py-20 bg-slate-900 w-full h-fit rounded-2xl`}>
                            <li><Link className='text-white text-lg font-normal tracking-tight' to="/">Shop</Link></li>
                            <li><Link className='text-white text-lg font-normal tracking-tight' to="/order">Order Review</Link></li>
                            <li><Link className='text-white text-lg text font-normal tracking-tight' to="/inventory">Manage Inventory</Link></li>
                            <li><Link className='text-white text-lg font-normal tracking-tight' to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Header;