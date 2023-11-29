import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const ManageSlot = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    const { data: manageSlot = [] } = useQuery({
        queryKey: ["manageSlot"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/manageSlot/${user?.email}`);
            return res.data;
        },
    });
    return (
        <div>
            <SectionTitle heading="Manage Slot"></SectionTitle>
            <h2 className="text-2xl font-semibold my-2">
                Total Subscriber: {manageSlot?.length}
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageSlot?.map((user, idx) => (
                            <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.plan}</td>
                                <td>{user?.slot}</td>
                                <td>{user?.customerEmail}</td>
                                <td><button className="btn btn-sm btn-error">Reject</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSlot;