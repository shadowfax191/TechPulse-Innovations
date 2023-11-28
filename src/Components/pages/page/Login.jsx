import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { sigIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const { data: fires = [] } = useQuery({
        queryKey: ['fire'],
        queryFn: async () => {
            const res = await axiosPublic.get('/fire')
            return res.data
        },
    })



    const handleSubmit = (e) => {
        e.preventDefault()

        const password = e.target.password.value
        const email = e.target.email.value

        const employeeFire = fires.find(fire => fire.email == email)

        if (employeeFire) {
            return toast.error('You fired from this company',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#FF0',
                        color: '#333',
                    },
                });
        }

        sigIn(email, password)
            .then(res => {
                if (res.user.uid) {
                    toast.success('Successfully Login Complete ',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        })
                    navigate(location?.state ? location.state : '/')
                }

            })
            .catch(err => {
                toast.error(err.message,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#FF0',
                            color: '#333',
                        },
                    });
            })


    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="" />
                        Flowbite
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Log in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</p>
                                </div>
                                <button type="submit" className="w-full focus:ring-4 focus:outline-none bg-blue-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log in</button>
                                <p className="text-sm font-light">
                                    Don’t have an account yet? <Link to='/signIn' className="font-medium text-blue-gray-600">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;