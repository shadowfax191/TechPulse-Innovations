
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

const EmployeeList = () => {
    const axiosSecure = useAxiosSecure()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        },
    })

    const handleVerify = (verified, id) => {

        const verify = !verified
        console.log(verify);

        axiosSecure.put(`/users/update/${id}`, { verify })
            .then(res => {
                console.log(res.data)
                refetch()
            })
            .catch(err => {
                console.log(err);
            })

    }


    return (
        <div className="mx-auto py-10 w-full">
            <h2 className="capitalize  text-center pb-5 text-3xl font-bold">Employee List</h2>
            <h2 className="capitalize text-gray-700 text-center pb-5">total Employee: {users.filter(user => user.role === 'employee').length}</h2>
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
                                users.filter(user => user.role === 'employee').map(user =>
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
                                                <Button onClick={handleOpen} type="button" variant="outlined" size="sm" color="gray" fullWidth >
                                                    pay
                                                </Button>

                                                <Dialog open={open} animate={{
                                                    mount: { scale: 1, y: 0 },
                                                    unmount: { scale: 0.9, y: -100 },
                                                }}>
                                                    <DialogHeader>Its a simple dialog.</DialogHeader>
                                                    <DialogBody>
                                                        The key to more success is to have a lot of pillows. Put it this way,
                                                        it took me twenty five years to get these plants, twenty five years of
                                                        blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                                                        getting started. I&apos;m up to something. Fan luv.
                                                    </DialogBody>
                                                    <DialogFooter>
                                                        <Button
                                                            variant="text"
                                                            color="red"
                                                            onClick={handleOpen}
                                                            className="mr-1"
                                                        >
                                                            <span>Cancel</span>
                                                        </Button>
                                                        <Button variant="gradient" color="green" onClick={handleOpen}>
                                                            <span>Confirm</span>
                                                        </Button>
                                                    </DialogFooter>
                                                </Dialog>



                                            </div>
                                                :
                                                <Button variant="outlined" size="sm" color="gray" fullWidth disabled='disable'>
                                                    pay
                                                </Button>
                                            }

                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/dashboard/details/${user?._id}`}> <Button variant="gradient" size="sm">
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