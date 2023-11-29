import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const AllTrainer = () => {
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
            <SectionTitle heading="All Trainers"></SectionTitle>
            <h2 className="text-2xl font-semibold my-2">
                Total Subscriber: {trainers.length}
            </h2>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className="bg-cyan-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainers?.map((user, idx) => (
                            <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className=" px-5 bg-lime-50 py-1 rounded disabled cursor-default">Pay</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainer;