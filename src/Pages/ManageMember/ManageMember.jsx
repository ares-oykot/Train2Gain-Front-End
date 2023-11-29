import { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const ManageMember = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    const { data: manageMember = [] } = useQuery({
        queryKey: ["manageMember"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/manageSlot/${user?.email}`);
            return res.data;
        },
    });
    return (
        <div>
            <SectionTitle heading="Manage Member"></SectionTitle>
            <h2 className="text-2xl font-semibold my-2">
                Total Member: {manageMember?.length}
            </h2>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className="bg-cyan-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Plan</th>
                            <th>Slot</th>
                            <th>Email</th>
                            <th>Send Instructions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageMember?.map((user, idx) => (
                            <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.plan}</td>
                                <td>{user?.slot}</td>
                                <td>{user?.customerEmail}</td>
                                <td>
                                    <button className="btn btn-sm btn-accent btn-outline">
                                        Message
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMember;