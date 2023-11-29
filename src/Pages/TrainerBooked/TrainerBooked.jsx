import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const TrainerBooked = () => {
    const { user } = useContext(AuthContext);
    const { email, slot } = useParams();
    const axiosSecure = useAxiosSecure();
    const handleGetPackage = (plan) => {
        const bookedInfo = {
            plan,
            slot,
            trainerEmail: email,
            customerEmail: user?.email,
        };
        axiosSecure.post("/bookedTrainer", bookedInfo).then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for purchasing our package",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    return (
        <div className="">
            <h1 className="text-5xl text-center font-bold bg-lime-400 py-4">
                Our Packages
            </h1>
            <div className="flex justify-center gap-5 mt-3">
                <div className="w-72 h-96 rounded-xl bg-slate-300">
                    <div className="bg-slate-400 h-2/5 rounded-xl pt-5">
                        <p className="text-2xl font-bold text-center ">
                            Silver
                        </p>
                        <p className="text-6xl text-white text-center font-extrabold">
                            $20
                        </p>
                        <p className="text-center mt-2 text-xl font-medium">
                            Per Month
                        </p>
                    </div>
                    <div className="text-lg font-medium text-center mt-2">
                        <p>Rowing</p>
                        <p>Cycling</p>
                        <p>Pilates</p>
                        <p>Dance</p>
                        <p>Stretching</p>
                        <button
                            onClick={() => handleGetPackage("Silver")}
                            className="btn btn-sm mt-5 px-8 rounded-md text-lg"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
                <div className="w-72 h-96 border rounded-xl bg-amber-300">
                    <div className="bg-amber-500 h-2/5 rounded-xl pt-5">
                        <p className="text-2xl font-bold text-center">Gold</p>
                        <p className="text-6xl text-white text-center font-extrabold">
                            $40
                        </p>
                        <p className="text-center mt-2 text-xl font-medium">
                            Per Month
                        </p>
                    </div>
                    <div className="text-lg font-medium text-center mt-2">
                        <p>Rowing</p>
                        <p>Cycling</p>
                        <p>Pilates</p>
                        <p>Dance</p>
                        <p>Stretching</p>
                        <button
                            onClick={() => handleGetPackage("Gold")}
                            className="btn btn-sm mt-5 px-8 rounded-md text-lg"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
                <div className="w-72 h-96 border rounded-xl bg-sky-300">
                    <div className="bg-sky-400 h-2/5 rounded-xl pt-5">
                        <p className="text-2xl font-bold text-center">
                            Diamond
                        </p>
                        <p className="text-6xl text-white text-center font-extrabold">
                            $80
                        </p>
                        <p className="text-center mt-2 text-xl font-medium">
                            Per Month
                        </p>
                    </div>
                    <div className="text-lg font-medium text-center mt-2">
                        <p>Rowing</p>
                        <p>Cycling</p>
                        <p>Pilates</p>
                        <p>Dance</p>
                        <p>Stretching</p>
                        <button
                            onClick={() => handleGetPackage("Diamond")}
                            className="btn btn-sm mt-5 px-8 rounded-md text-lg"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerBooked;
