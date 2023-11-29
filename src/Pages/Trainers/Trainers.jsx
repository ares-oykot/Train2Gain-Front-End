import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Trainers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: trainers = [] } = useQuery({
        queryKey: ["trainers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/beATrainer");
            return res.data;
        },
    });
    console.log(trainers);
    return (
        <div>
            <h1 className="text-4xl text-center font-bold">
                Available Trainer
            </h1>
        </div>
    );
};

export default Trainers;