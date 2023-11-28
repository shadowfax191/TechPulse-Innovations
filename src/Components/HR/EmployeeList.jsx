
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Button } from "@material-tailwind/react";

import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const stripePromise = loadStripe('pk_test_51OEyu8Cr8ts1TE5ReninIoq6jtOlwcZnjbCSWs6tiXNNx1XyIQBxhgr58CA3tw7cuSO3vCR5d2MVMM20Hy8wz8yi00FDINzBf6')



const EmployeeList = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState([])
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    

    const handleOpen = (value) => {
        setOpen(!open)
        setModalData(value);
    };


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        },
    })

    const { data: fires = [] } = useQuery({
        queryKey: ['newFire'],
        queryFn: async () => {
            const res = await axiosPublic.get('/fire')
            return res.data
        },
    })



    const handleVerify = (verified, id) => {

        const verify = !verified

        axiosSecure.put(`/users/update/${id}`, { verify })

        refetch()
    }




    return (
        <div className="mx-auto py-10 w-full">
            <h2 className="capitalize  text-center pb-5 text-3xl font-bold">Employee List</h2>
            <h2 className="capitalize text-gray-700 text-center pb-5">total Employee: {users.filter(user => user?.role === 'employee' && !fires?.find(fire => fire?.email == user?.email))?.length}</h2>
            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:max-h-[70vh] overflow-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Employee name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Verified
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Bank Account
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Salary
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Action
                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.filter(user => user?.role === 'employee' && !fires?.find(fire => fire?.email == user?.email)).map(user =>
                                    <tr key={user?._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                                            {user?.name}
                                        </th>
                                        <td className="px-6 py-4 text-gray-900 ">
                                            {user?.email}
                                        </td>
                                        <td onClick={() => handleVerify(user?.verified, user?._id)} className="px-6 py-4 text-gray-900 ">
                                            {user?.verified ? <button><img className=" mx-auto w-10 h-10" src="https://i.ibb.co/qnVd0TM/correct.png" alt="" /></button>
                                                : <button><img className=" mx-auto w-10 h-10" src="https://i.ibb.co/8m7LyVz/remove.png" alt="" /></button>

                                            }
                                        </td>
                                        <td className="px-6 py-4 text-gray-900 ">
                                            {user?.bank}
                                        </td>
                                        <td className="px-6 py-4 text-gray-900 ">
                                            $ {user?.salary}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user?.verified ? <div>
                                                <Button onClick={() => handleOpen(user)} type="button" variant="outlined" size="sm" color="gray" fullWidth >
                                                    pay
                                                </Button>

                                                <Dialog className="overflow-auto" open={open} animate={{
                                                    mount: { scale: 1, y: 0 },
                                                    unmount: { scale: 0.9, y: -100 },
                                                }}>
                                                    <DialogHeader className="capitalize  justify-center">payment to {modalData?.name}</DialogHeader>
                                                    <DialogBody>
                                                        <div className="mx-auto">
                                                            <p className="text-xl text-center">Salary: $ {modalData?.salary}</p>


                                                            <div className="flex mx-auto justify-center m-3 gap-5 pb-3">
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Month</label>
                                                                    <select onChange={(e) => setMonth(e.target.value)} name="month" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                                        <option value="">Select Month</option>
                                                                        <option value="January">January</option>
                                                                        <option value="February">February</option>
                                                                        <option value="March">March</option>
                                                                        <option value="April">April</option>
                                                                        <option value="May ">May </option>
                                                                        <option value="June">June</option>
                                                                        <option value="July">July</option>
                                                                        <option value="September">September</option>
                                                                        <option value="October">October</option>
                                                                        <option value="November">November</option>
                                                                        <option value="December">December</option>
                                                                    </select>
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                                                    <input onChange={(e) => setYear(e.target.value)} type="number" name="year" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="designation" required />
                                                                </div>
                                                            </div>


                                                            <div className="">

                                                                <Elements stripe={stripePromise} >
                                                                    <CheckOutForm modalData={modalData} month={month} year={year} ></CheckOutForm>
                                                                </Elements>
                                                            </div>
                                                            <DialogFooter>
                                                                <Button
                                                                    variant="text"
                                                                    color="red"
                                                                    onClick={handleOpen}
                                                                    className="mr-1"
                                                                >
                                                                    <span>Cancel</span>
                                                                </Button>
                                                            </DialogFooter>

                                                        </div>
                                                    </DialogBody>

                                                </Dialog>



                                            </div>
                                                :
                                                <Button variant="outlined" size="sm" color="gray" fullWidth disabled='disable'>
                                                    pay
                                                </Button>
                                            }

                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/dashboard/details/${user?.email}`}> <Button variant="gradient" size="sm">
                                                details
                                            </Button></Link>
                                        </td>

                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default EmployeeList;