
import logo from '../assets/logo.svg';


const Login = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-zinc-950 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-20 px-4">
                <div className="mb-10 lg:mb-0  mr-90">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-96 h-96 invert"
                    />
                </div>

                <div className="max-w-md w-full space-y-6 mb-60 ">
                    <h1 className="text-7xl font-bold whitespace-nowrap">Happening now</h1>
                    <h2 className="text-3xl font-semibold mt-20">Join today.</h2>

                    <div className=''>
                        <button className='flex items-center justify-center gap-2 bg-white text-black py-2 px-20 rounded-full font-medium'>
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
                            Sign in with Google
                        </button>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-white text-black py-2 px-20 rounded-full font-medium" >
                            Sign up with Apple
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
