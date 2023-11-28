import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../firebase/firebase";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const password = e.target.password.value
        const email = e.target.email.value
        const role = e.target.role.value
        const designation = e.target.designation.value
        const bank = e.target.bank.value
        const salary = e.target.salary.value
        let verified = false
        const image = e.target.photoUrl.files[0]

        if (role === 'HR') {
            verified = true
        }

        const formData = new FormData()
        formData.append('image', image)
        const res = await axios.post('https://api.imgbb.com/1/upload?key=8c18d2802c17409cea414bbb6076ba41', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        const photo = res.data.data.display_url

        if (/^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            createUser(email, password)
                .then((res) => {

                    if (res.user.uid) {
                       
                        const info = {
                            name,
                            email,
                            photo,
                            role,
                            designation,
                            bank,
                            salary,
                            verified
                        }
                       
                        axiosPublic.post('/users', info)
                            .then(() => {
                       
                                toast.success('Successfully Registration Complete ',
                                {
                                    style: {
                                        borderRadius: '10px',
                                        background: '#333',
                                        color: '#fff',
                                    },
                                })
                            })
                    }

                    const user = auth.currentUser
                    if (user) {
                        updateProfile(user, {
                            displayName: name,
                            photoURL: photo,

                        })
                    }
                    navigate('/')
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

        else {
            toast.error('Password should contain 1 upper case,1 special character and at least 6 character',
                {

                    style: {
                        borderRadius: '10px',
                        background: '#FF0',
                        color: '#333',
                    },
                })
        }



        e.target.reset();

    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900 py-7">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                    <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="" />
                        Flowbite
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo</label>
                                    <input type="file" name="photoUrl" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="photo" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Role</label>
                                    <select id="countries" name="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required>
                                        <option value="employee">Employee</option>
                                        <option value="HR">HR</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Designation</label>
                                    <input type="text" name="designation" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="designation" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Salary</label>
                                    <input type="number" name="salary" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="designation" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Bank_Account_No</label>
                                    <input type="text" name="bank" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="bank" required />
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
                                <button type="submit" className="w-full focus:ring-4 focus:outline-none bg-blue-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
                                <p className="text-sm font-light">
                                    Don’t have an account yet? <Link to='/logIn'><span className="font-medium text-blue-gray-600">Log In</span></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;