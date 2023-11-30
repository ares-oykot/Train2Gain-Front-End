import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Schedule from "../Schedule/Schedule";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Classes = () => {
    const axiosPublic = useAxiosPublic();
    const { data: classes = [] } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
            const res = await axiosPublic.get("/classes");
            return res.data;
        },
    });
    return (
        <div className="max-w-screen-xl mx-auto">
            <Schedule></Schedule>
            <SectionTitle heading="Our All Classes"></SectionTitle>
            <div className="grid grid-cols-4 gap-5">
                {classes.map((newClass) => (
                    <div
                        className="bg-slate-200 border rounded border-black hover:border-slate-500 hover:bg-slate-400 duration-300 p-5"
                        key={newClass._id}
                    >
                        <Link to="/trainers">
                            <div className="bg-sky-200 rounded h-full p-2">
                                <h4 className="text-lg font-medium">
                                    Class: {newClass?.class}
                                </h4>
                                <div className="">
                                    <p>
                                        <span className="text-lg font-semibold">
                                            Details:
                                        </span>{" "}
                                        {newClass?.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;