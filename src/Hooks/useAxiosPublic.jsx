import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://train2-gain-back-end.vercel.app",
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
