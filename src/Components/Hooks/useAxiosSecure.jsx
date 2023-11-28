import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://employee-management-system-server-tau.vercel.app',
    withCredentials: true
})


const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;