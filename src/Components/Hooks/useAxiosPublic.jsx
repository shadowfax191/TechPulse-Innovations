import axios from "axios";


const axiosPublic =axios.create({
    baseURL:'https://employee-management-system-server-tau.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;