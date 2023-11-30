import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AppliedTrainers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: appliedTrainers = [] } = useQuery({
        queryKey: ["appliedTrainers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/appliedATrainer");
            return res.data;
        },
    });
    const handleMakeTrainer = (email) => {
        axiosSecure.put(`/makeTrainer/${email}`).then((res) => {
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your are now trainer!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    return (
        <div className="">
            <SectionTitle heading="Applied Trainers"></SectionTitle>
            <h2 className="text-2xl font-semibold my-2">
                Total Applied Trainer: {appliedTrainers.length}
            </h2>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead className="bg-cyan-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appliedTrainers?.map((user, idx) => (
                            <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="">
                                        <button
                                            className="btn"
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        `my_modal_${idx}`
                                                    )
                                                    .showModal()
                                            }
                                        >
                                            Details
                                        </button>
                                        <dialog
                                            id={`my_modal_${idx}`}
                                            className="modal"
                                        >
                                            <div className="modal-box border w-1/2 h-full flex flex-col justify-between">
                                                <div className=" border w-full pb-20 bg-slate-200">
                                                    <img
                                                        className="w-36 mx-auto"
                                                        src={user?.photo}
                                                        alt=""
                                                    />
                                                    <div className="text-lg font-semibold ml-5">
                                                        <p>
                                                            Name: {user?.name}
                                                        </p>
                                                        <p>
                                                            Email: {user?.email}
                                                        </p>
                                                        <p>Age: {user?.age}</p>
                                                        <p>
                                                            Time:{" "}
                                                            {user?.timeDay}{" "}
                                                            minutes
                                                        </p>
                                                        <p>
                                                            Experience:{" "}
                                                            {user?.experience}
                                                            years
                                                        </p>
                                                        <div className="flex gap-5 mt-5">
                                                            <button
                                                                onClick={() =>
                                                                    handleMakeTrainer(user?.email)
                                                                }
                                                                className=" px-5 bg-green-400 py-1 rounded disabled cursor-default"
                                                            >
                                                                Approve
                                                            </button>
                                                            <button className=" px-5 bg-red-400 py-1 rounded disabled cursor-default">
                                                                Reject
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-action">
                                                    <form method="dialog flex">
                                                        <button className="btn">
                                                            Close
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedTrainers;
