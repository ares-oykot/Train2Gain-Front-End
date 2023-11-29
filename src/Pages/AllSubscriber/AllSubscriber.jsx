import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const AllSubscriber = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allSubscriber = [] } = useQuery({
        queryKey: ["allSubscriber"],
        queryFn: async () => {
            const res = await axiosSecure.get("/allSubscriber");
            return res.data;
        },
    });
    return (
        <div>
            <SectionTitle heading="All Subscriber"></SectionTitle>
            <h2 className="text-2xl font-semibold my-2">
                Total Subscriber: {allSubscriber.length}
            </h2>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className="bg-cyan-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSubscriber?.map((user, idx) => (
                            <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSubscriber;