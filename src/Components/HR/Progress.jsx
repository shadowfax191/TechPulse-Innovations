import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useState } from "react";



const Progress = () => {
    const axiosSecure = useAxiosSecure()
    const [employeeName, setEmployeeName] = useState('')
    const [month, setMonth] = useState('')


    const { data: work = [], refetch } = useQuery({
        queryKey: ['work'],
        queryFn: async () => {
            const res = await axiosSecure.get('/work')
            return res.data
        },
    })
    const { data: users = [] } = useQuery({
        queryKey: ['usersFor'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        },
    })

    const filterData = () => {
        let filteredData = work
        
        if (employeeName) {
            filteredData = filteredData.filter(data => data.email == employeeName)
        }
        if (month) {
            filteredData = filteredData.filter(data => data.date.split(' ', [1]) == month)
        }
        refetch()
        return filteredData
    }
    const filteredData = filterData()

    return (
        <div className="mx-auto py-10 max-w-3xl">
            <div className="flex gap-5 pb-8 justify-center">
                <div >
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Name</label>
                    <select  onChange={(e) => setEmployeeName(e.target.value)} name="name" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="">All Employee</option>
                        {users.filter(user => user.role === 'employee').map(user =>
                            <option className="capitalize" key={user._id} value={user?.email}>{user?.name}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Month</label>
                    <select defaultValue='select' onChange={(e) => setMonth(e.target.value)} name="task" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>

                        <option value='' >All Month</option>
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
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:max-h-[70vh] overflow-auto  ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-2xl">
                            <th scope="col" className="px-6 py-3">
                                Task
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Hour
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Date
                            </th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map(work =>
                                < tr key={work?._id} className="odd:bg-white text-xl odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                                        {work?.task}
                                    </th>

                                    <td className="px-6 py-4 text-gray-900 capitalize text-center">
                                        {work?.hour} hr
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 capitalize text-right ">
                                        {work?.date}
                                    </td>




                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Progress;