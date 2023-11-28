import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin={}, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/${user?.email}`)
            return res.data.isAdmin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;