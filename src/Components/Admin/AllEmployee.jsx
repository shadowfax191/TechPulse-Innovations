import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Button } from "@material-tailwind/react";
import { Whatshot } from "@mui/icons-material";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const AllEmployee = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['allEmployee'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allEmployee')
            return res.data
        },
    })
    const { data: fires = [], refetch: fetch } = useQuery({
        queryKey: ['fire'],
        queryFn: async () => {
            const res = await axiosSecure.get('/fire')
            return res.data
        },
    })

    const handleMakeHr = (id) => {
        const HR = 'HR'
        axiosSecure.put(`/makeHr/update/${id}`, { HR })
            .then(res => {
                if (res.data) {
                    toast.success('Making HR This Employee Done!', {
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            color: '#713200',

                        }
                    })
                }
                refetch()
            })

    }

    const handleFire = (email) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to fire this employee?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, fire !"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/fire', { email })
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                title: "fired!",
                                text: "Your employee has been fired.",
                                icon: "success"
                            });
                            fetch()
                        }
                    })

            }
        });


    }

    return (

        <div className="mx-auto py-10 w-full">
            <h2 className="capitalize  text-center pb-5 text-3xl font-bold">All Employee List</h2>

            <div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:max-h-[70vh] overflow-auto ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Employee name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Designation
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Make HR
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Fire
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.filter(user => user.role !== 'admin' && user.verified).map(user =>
                                    <tr key={user?._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                                            {user?.name}
                                        </th>
                                        <td className="px-6 py-4 text-gray-900 capitalize ">
                                            {user?.designation}
                                        </td>

                                        <td className="px-6 py-4 text-gray-900 ">
                                            {
                                                fires.find(fire => fire?.email === user?.email) ? 'fired' : <div>
                                                    {user?.role == 'HR' ?
                                                        <div className="flex items-center gap-2 justify-center">
                                                            <img className="w-4 h-4" src="https://i.ibb.co/71whWdt/check.png" alt="" />
                                                            <p className=" py-4 text-gray-900 ">HR</p>
                                                        </div>
                                                        :
                                                        <Button onClick={() => handleMakeHr(user?._id)} variant="outlined" size="sm" color="gray" fullWidth >
                                                            make hr
                                                        </Button>

                                                    }
                                                </div>
                                            }

                                        </td>

                                        <td className="px-6 py-4">
                                            {
                                                fires.find(fire => fire?.email === user?.email) ? 'fired' :

                                                    <div> < Button onClick={() => handleFire(user?.email)} variant="gradient" size="sm">
                                                        <Whatshot className="h-3 w-5 pr-1" />
                                                        Fire
                                                    </Button></div>}
                                        </td>


                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div >

    );
};

export default AllEmployee;