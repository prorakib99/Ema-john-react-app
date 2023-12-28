import Header from '../Header/Header';

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className='container mx-auto px-8'>
                <div className='h-[90vh] flex items-center justify-center'>
                    <p className="text-slate-700 text-[62px] font-light">404 <span className='border-l-4 border-amber-500 pl-4'>Nothing here to see</span></p>
                </div>
            </div>
        </>
    );
};

export default NotFound;