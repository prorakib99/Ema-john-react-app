import { Toaster } from 'react-hot-toast';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Header></Header>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;