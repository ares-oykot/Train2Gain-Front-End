import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import fb from "../../assets/social/facebook.png";
import tw from "../../assets/social/twitter.png";
import yt from "../../assets/social/youtube.png";

const TrainerDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: trainersDetails = [] } = useQuery({
        queryKey: ["trainersDetails"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/beATrainer/${id}`);
            return res.data;
        },
    });
    const calculateSlots = (minutes) => {
        // Assuming each slot is 60 minutes
        return Math.floor(minutes / 60);
    };
    const generateButtons = (slots) => {
        const buttons = [];
        for (let i = 0; i < slots; i++) {
            buttons.push(
                <button
                    className="border btn bg-sky-400 py-1  rounded text-white"
                    key={i}
                >
                    {i + 6} am - {i + 7} am{" "}
                </button>
            );
        }
        return buttons;
    };
    const { name, email, age, photo, timeDay, experience, skills } =
        trainersDetails || {};
        console.log(skills);
    return (
        <div>
            <div className="mt-5">
                <div className="flex ">
                    <img className="w-96 h-96" src={photo} alt="" />
                    <div className="p-2 w-full bg-sky-100">
                        <p className="text-2xl font-semibold">Name: {name}</p>
                        <p className="text-2xl font-semibold">Email: {email}</p>
                        <p className="text-2xl font-semibold">Age: {age}</p>
                        <p className="text-2xl font-semibold">
                            Years of Experience: {experience}
                        </p>
                        <div className="flex gap-5 mt-2">
                            <img
                                className="w-10 rounded-full cursor-pointer"
                                src={fb}
                                alt=""
                            />
                            <img
                                className="w-10 rounded-full cursor-pointer"
                                src={tw}
                                alt=""
                            />
                            <img
                                className="w-10 rounded-full cursor-pointer"
                                src={yt}
                                alt=""
                            />
                        </div>
                        <div className="mt-3">
                            <p className="text-2xl font-semibold mb-2">
                                Available Slots
                            </p>
                            <div className="grid grid-cols-5 gap-1">
                                {generateButtons(
                                    calculateSlots(timeDay)
                                )}
                            </div>
                        </div>
                        <div className="mt-2 flex gap-1">
                            <button className="text-xl bg-amber-300 px-2">{skills?.skill1}</button>
                            <button className="text-xl bg-amber-300 px-2">{skills?.skill2}</button>
                            <button className="text-xl bg-amber-300 px-2">{skills?.skill3}</button>
                            <button className="text-xl bg-amber-300 px-2">{skills?.skill4}</button>
                            <button className="text-xl bg-amber-300 px-2">{skills?.skill5}</button>
                            <button className="text-xl bg-amber-300 px-2">{skills?.skill6}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;
