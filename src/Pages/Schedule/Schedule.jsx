import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Schedule = () => {
    const axiosPublic = useAxiosPublic();
    const { data: schedule = [] } = useQuery({
        queryKey: ["blog"],
        queryFn: async () => {
            const res = await axiosPublic.get("/schedule");
            return res.data;
        },
    });
    const day = [
        { week: "Sunday" },
        { week: "Monday" },
        { week: "Tuesday" },
        { week: "Wednesday" },
        { week: "Thursday" },
    ];
    return (
        <div className="text-center text-lg font-semibold">
            <SectionTitle heading="Weekly Schedule"></SectionTitle>
            <div className="grid grid-cols-5 gap-5 mb-5">
                {day.map((time, idx) => (
                    <div className="py-5 rounded-t-lg bg-lime-400 duration-300 hover:bg-lime-500" key={idx}>{time.week}</div>
                ))}
            </div>
            <div className="grid grid-cols-5 gap-5">
                {schedule.map((routine) => (
                    <div className="rounded-lg py-5 bg-sky-300 duration-300 hover:bg-sky-400" key={routine._id}>
                        <h6>{routine.time}</h6>
                        <p>{routine.class}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;