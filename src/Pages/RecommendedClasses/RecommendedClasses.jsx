import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const RecommendedClasses = () => {
    const axiosPublic = useAxiosPublic();
    const { data: classes = [] } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
            const res = await axiosPublic.get("/classes");
            return res.data;
        },
    });
    return (
        <div>
            <SectionTitle heading="RecommendedClasses"></SectionTitle>
            <div className="">
                <div className="overflow-x-auto ">
                    <table className="table table-zebra w-full ">
                        {/* head */}
                        <thead className="bg-cyan-200">
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes?.map((user, idx) => (
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.class}</td>
                                    <td>{user?.description}</td>
                                    <td>
                                        <Link to="/classes" className="btn btn-sm btn-accent btn-outline">
                                            Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecommendedClasses;
