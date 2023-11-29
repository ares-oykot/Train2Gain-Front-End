import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AppliedTrainers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: appliedTrainers = [] } = useQuery({
        queryKey: ["appliedTrainers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/beATrainer");
            return res.data;
        },
    });
    console.log(appliedTrainers);
    return <div></div>;
};

export default AppliedTrainers;
