import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,  Legend, ResponsiveContainer } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
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

    const { data: paymentInfo = []} = useQuery({
        queryKey: ['paymentInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${id}`)
            return res.data
        },
    })

    const barCharts = paymentInfo.map(data => {
        return { name: `${data.month} ${data.year}`, salary: data.salary }
    })

    return (
        <div className="mx-auto py-5 max-w-5xl">
            <h2 className="capitalize text-3xl font-bold text-center">details of Employee </h2>
            <div className="mt-10 flex justify-center  items-center gap-5">
                <img className="w-20 h-20 rounded-full" src={employeeData?.photo} alt="" />
                <div> <h2 className="capitalize text-xl">Name: {employeeData?.name}</h2>
                    <h2 className="capitalize text-xl">designation: {employeeData?.designation}</h2>
                </div>

            </div>
            <div className="mt-10 w-96 md:w-full overflow-x-auto">
                <ResponsiveContainer></ResponsiveContainer>
                <BarChart
                className="overflow-x-auto"
                    width={500}
                    height={400}
                    data={barCharts}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />

                    <YAxis />
                    <Bar dataKey="salary" fill="#8884d8" label={{ position: 'top' }}>
                        {barCharts.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                        ))}
                    </Bar>
                    <Legend></Legend>
                </BarChart>
            </div>
        </div>
    );
};

export default Details;