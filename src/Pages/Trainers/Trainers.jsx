import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import fb from "../../assets/social/facebook.png";
import tw from "../../assets/social/twitter.png";
import yt from "../../assets/social/youtube.png";
import { Link } from "react-router-dom";

const Trainers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: trainers = [] } = useQuery({
        queryKey: ["trainers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/beATrainer");
            return res.data;
        },
    });
    const calculateSlots = (minutes) => {
        // Assuming each slot is 60 minutes
        return Math.floor(minutes / 60);
    };
    const generateButtons = (slots, id) => {
        const buttons = [];
        for (let i = 0; i < slots; i++) {
            buttons.push(<button className="border bg-sky-400 py-1  rounded text-white" key={i}>{i + 6} am - {i + 7} am </button>);
        }
        return buttons;
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="text-white text-center py-5 bg-stone-400">
                <h1 className="text-4xl font-bold">Be a Trainer</h1>
                <Link to="/beATrainer">
                    <button className="btn text-2xl btn-outline mt-3">
                        Become a Trainer
                    </button>
                </Link>
            </div>
            <h1 className="text-5xl bg-sky-300 py-1 pb-3 text-center font-bold">
                Available Trainer
            </h1>
            {trainers?.map((trainer) => (
                <div className="mt-5" key={trainer._id}>
                    <div className="flex ">
                        <img className="w-96 h-96" src={trainer.photo} alt="" />
                        <div className="p-10 w-full bg-sky-100">
                            <p className="text-2xl font-semibold">
                                Name: {trainer.name}
                            </p>
                            <p className="text-2xl font-semibold">
                                Age: {trainer.age}
                            </p>
                            <p className="text-2xl font-semibold">
                                Years of Experience: {trainer.experience}
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
                                        calculateSlots(trainer.timeDay),
                                        trainer._id
                                    )}
                                </div>
                            </div>
                            <button className="bg-blue-600 text-white px-12 py-2 mt-3 rounded-lg">
                                Know more
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Trainers;
