import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Team = () => {
    const axiosPublic = useAxiosPublic();
    const { data: trainers = [] } = useQuery({
        queryKey: ["trainers"],
        queryFn: async () => {
            const res = await axiosPublic.get("/beATrainer");
            return res.data;
        },
    });
    return (
        <div className="mt-5">
            <h1 className="text-5xl font-extrabold">Our Coach</h1>
            <div className="flex flex-col md:flex-row w-full gap-8">
                {trainers?.slice(0, 4).map((trainer) => (
                    <div
                        className="mt-5 text-lg rounded-b-md font-semibold bg-slate-200"
                        key={trainer._id}
                    >
                        <div className="w-full">
                            <img
                                className="w-96 rounded-t-md h-52"
                                src={trainer?.photo}
                                alt=""
                            />
                        </div>
                        <div className="p-5">
                            <p>Name: {trainer?.name}</p>
                            <p>Age: {trainer?.name}</p>
                            <p>Experience: {trainer?.experience} years</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
