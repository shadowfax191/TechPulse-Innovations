import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useHr = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: isHR,isPending:isHrLoading } = useQuery({
        queryKey: [user?.email, 'isHr'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/hr/${user?.email}`)
            return res.data.isHr
        }
    })
    return [isHR,isHrLoading]
};

export default useHr;