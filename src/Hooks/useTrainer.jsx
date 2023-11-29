import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTrainer = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, "isTrainer"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/trainer/${user.email}`);
            console.log(res.data);
            return res.data?.trainer;
        },
    });
    return [isTrainer, isTrainerLoading];
};

export default useTrainer;