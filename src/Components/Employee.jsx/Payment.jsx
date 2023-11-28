import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const Payment = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    console.log(user.email);

    const { data: EmployeePayments = [] } = useQuery({
        queryKey: ['EmployeePayments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employeePayment/${user.email}`)
            return res.data
        },
    })
  


    return (
        <div className="mx-auto py-10 max-w-3xl">
            <h1 className="capitalize  text-center pb-5 text-3xl font-bold ">Payment-history</h1>



            <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:max-h-[70vh] overflow-auto  ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-2xl">
                            <th scope="col" className="px-6 py-3 text-center">
                                Month
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Transaction Id
                            </th> </tr>
                    </thead>
                    <tbody>
                        {
                            EmployeePayments.map(Payment =>
                                < tr key={Payment?._id} className="odd:bg-white text-xl odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                                        {Payment?.month},{Payment?.year}
                                    </th>

                                    <td className="px-6 py-4 text-gray-900 capitalize text-center">
                                        $ {Payment?.salary}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 capitalize text-right ">
                                        {Payment?.paymentMethod.id}
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

export default Payment;