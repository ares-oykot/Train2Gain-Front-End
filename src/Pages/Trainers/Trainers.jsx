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
    

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="text-white text-center rounded-lg mt-5 py-20 bg-green-200">
                <h1 className="text-6xl font-black">Be a Trainer</h1>
                <Link to="/beATrainer">
                    <button className="btn text-2xl btn-outline mt-3">
                        Become a Trainer
                    </button>
                </Link>
            </div>
            <div className="text-5xl mt-5 bg-sky-300 py-10 rounded-lg text-center font-bold">
                <h1 className="">Available Trainer</h1>
            </div>
            {trainers?.map((trainer) => (
                <div className="mt-5" key={trainer._id}>
                    <div className="flex ">
                        <img className="w-96 h-96 rounded-l-lg" src={trainer.photo} alt="" />
                        <div className="p-10 w-full rounded-r-lg bg-sky-100">
                            <p className="text-2xl font-semibold">
                                Name: {trainer.name}
                            </p>
                            <p className="text-2xl font-semibold">
                                Age: {trainer.age}
                            </p>
                            <p className="text-2xl font-semibold">
                                Years of Experience: {trainer.experience}
                            </p>
                            <div className="flex gap-5 mt-2 mb-10">
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
                            <Link to={`/trainerDetails/${trainer._id}`}>
                                <button className="bg-blue-600 text-white px-12 py-2 mt-3 rounded-lg">
                                    Know more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Trainers;
