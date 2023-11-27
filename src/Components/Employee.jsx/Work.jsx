import { useContext } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";
import moment from "moment/moment";
import { useQuery } from "@tanstack/react-query";


const Work = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()


    const { data: works = [], refetch } = useQuery({
        queryKey: ['work'],
        queryFn: async () => {
            const res = await axiosSecure.get('/work')
            return res.data
        },
    })

    console.log(user.uid);
    const handleSubmit = (e) => {
        e.preventDefault()
        const task = e.target.task.value
        const hour = parseInt(e.target.hour.value)
        const date = moment(e.target.date.value).format('MMMM DD YYYY')

        axiosSecure.post('/work', { task, hour, date, userId: user?.uid, email: user?.email })
            .then(res => {
                console.log(res.data);
                refetch()
            })
            e.target.reset();
    }
    return (
        <div className="mx-auto py-10 max-w-3xl">
            <h1 className="capitalize  text-center pb-5 text-3xl font-bold ">Work-Sheet</h1>
            <form onSubmit={handleSubmit} className="flex gap-7 mb-10 ">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Task</label>
                    <select name="task" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>

                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                        <option value="Content">Content</option>
                        <option value="Paper-work">Paper-work</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hours Worked</label>
                    <input type="number" name="hour" id="first_name" className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                      dark:focus:border-blue-500"
                        placeholder="hours" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                    <input type="date" name="date" id="first_name" className="bg-gray-50 border border-gray-600 text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                      dark:focus:border-blue-500" required />
                </div>
                <input type="submit" value='Submit' className="= border-2 border-black px-4  bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer  rounded-lg mt-6" />
            </form>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:max-h-[50vh] overflow-auto w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-2xl">
                            <th scope="col" className="px-6 py-3 text-center">
                                Task
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                Hour
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                               Date
                            </th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {
                            works.filter(work => work?.email === user?.email).reverse().map(work=>
                            < tr key={work?._id} className="odd:bg-white text-lg odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                            {work?.task}
                        </th>
                        
                        <td className="px-6 py-4 text-gray-900 capitalize ">
                            {work?.hour} hr
                        </td>
                        <td className="px-6 py-4 text-gray-900 capitalize ">
                            {work?.date}
                        </td>




                    </tr>

                    )
                            }

                </tbody>
            </table>
        </div>

        </div >
    );
};

export default Work;