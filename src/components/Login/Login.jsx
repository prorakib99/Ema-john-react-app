import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { user, signInUser, popUpSignIn } = useContext(AuthContext);
    const [show, setShow] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const loadingPromise = toast.loading('Pending...');
        () => loadingPromise;

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error("Password at least six character");
            return;
        }

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success(<b>User Sign In Success! {user.email}</b>);
                toast.dismiss(loadingPromise);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                toast.error(<b>Something Wrong Sign In Failed</b>);
                toast.dismiss(loadingPromise);
            })

    }

    const googleSignIn = () => {

        const loadingPromise = toast.loading('Pending...');
        () => loadingPromise;

        popUpSignIn()
            .then(result => {
                const user = result.user;
                toast.success(<b>User Sign In Success! {user.email}</b>);
                toast.dismiss(loadingPromise);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                toast.error(<b>Something Wrong Sign In Failed</b>);
                toast.dismiss(loadingPromise);
            })
    }

    if (user) {
        return <Navigate to='/' replace={true}></Navigate>
    }

    return (
        <div className="container mx-auto px-8">
            <div className="flex justify-center items-center my-24">
                <div className="w-full md:w-[500px] p-10 pt-6 relative before:bg-orange-200 before:absolute before:w-full before:h-full before:z-[-1] before:rounded-lg before:right-3 before:top-3 bg-white rounded-lg border border-gray-400">

                    <h4 className="text-slate-700 text-center text-[35px] font-normal tracking-tight">Login</h4>

                    <form onSubmit={handleLogin} className="grid gap-5 mt-7">
                        <div>
                            <label htmlFor="email" className="text-slate-700 ml-3 text-[17px] block font-normal tracking-tight">Email</label>
                            <input type="email" name="email" placeholder="Your Email..." className="rounded-[5px] h-[55px] text-lg px-4 mt-2 border w-full border-gray-400" />
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="text-slate-700 ml-3 text-[17px] block font-normal tracking-tight">Password</label>
                            <input type={show ? 'text' : 'password'} name="password" placeholder="Your Password..." className="rounded-[5px] h-[55px] text-lg px-4 mt-2 border w-full border-gray-400" />

                            <p onClick={() => setShow(!show)} className="cursor-pointer absolute right-4 bottom-4">
                                { show ? <AiOutlineEyeInvisible className="text-2xl" /> : <AiOutlineEye className="text-2xl" /> }
                            </p>
                        </div>

                        <div className="mt-5">
                            <input type="submit" value='Login' className="w-full h-[55px] cursor-pointer hover:bg-opacity-80 text-neutral-900 text-[21px] font-normal tracking-tight bg-amber-500 bg-opacity-30 rounded-[5px]" />
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        <p className="text-slate-700 text-[15px] font-normal tracking-tight">New to Ema-john? <Link to='/register' className="text-amber-500"> Create New Account</Link></p>
                    </div>
                    <div className="flex items-center gap-5 justify-center my-8">
                        <div className="w-[145px] h-[0px] border border-gray-400"></div>
                        <div className="text-gray-400 text-[17px] font-normal tracking-tight">or</div>
                        <div className="w-[145px] h-[0px] border border-gray-400"></div>
                    </div>
                    <div>
                        <button onClick={googleSignIn} className="w-full h-[55px] rounded-[5px] border hover:bg-slate-200 border-gray-400 text-slate-700 text-[17px] duration-300 font-normal tracking-tight flex justify-center items-center gap-2">
                            <FcGoogle className="text-3xl" />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;