import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
    const { id } = useParams()
console.log(id);
    const axiosSecure = useAxiosSecure()

    const { data: employeeData = [] } = useQuery({
        queryKey: ['employee'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee/${id}`)
            return res.data
        },
    })

    const { data: paymentInfo = [], refetch } = useQuery({
        queryKey: ['paymentInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${id}`)
            return res.data
        },
    })

    console.log(paymentInfo);

    return (
        <div className="mx-auto py-5 max-w-5xl">
            <h2 className="capitalize text-3xl font-bold text-center">details of Employee </h2>
        <div className="mt-10 flex justify-center  items-center gap-5">
            <img className="w-20 h-20 rounded-full" src={employeeData?.photo} alt="" />
           <div> <h2 className="capitalize text-xl">Name: {employeeData?.name}</h2>
            <h2 className="capitalize text-xl">designation: {employeeData?.designation}</h2>
            </div>

        </div>
        </div>
    );
};

export default Details;