import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import banner from "../../assets/b-crosstraining-jpg-160529092900-4167271649.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const BeATrainer = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const skill1 = form.skill1.checked ? form.skill1.value : "";
        const skill2 = form.skill2.checked ? form.skill2.value : "";
        const skill3 = form.skill3.checked ? form.skill3.value : "";
        const skill4 = form.skill4.checked ? form.skill4.value : "";
        const skill5 = form.skill5.checked ? form.skill5.value : "";
        const skill6 = form.skill6.checked ? form.skill6.value : "";
        const skills = {skill1, skill2, skill3, skill4, skill5, skill6};
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const photo = form.photo.value;
        const timeWeek = form.timeWeek.value;
        const timeDay = form.timeDay.value;
        const experience = form.experience.value;
        const role = "user";
        const trainerInfo = {name, email, age, photo, timeDay, timeWeek,experience, skills, role};
        axiosSecure.post("/beATrainer", trainerInfo).then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for being a coach",
                    showConfirmButton: false,
                    timer: 1500,
                });
                event.target.reset();
            }
        });
    };

    return (
        <div className="">
            <div className="">
                <div className="md:w-1/2 mx-auto shadow-xl">
                    <img
                        className="h-[170px] lg:h-[280px] w-full"
                        src={banner}
                        alt=""
                    />
                    <form
                        onSubmit={handleAddProduct}
                        className="px-8 card-body"
                    >
                        <h1 className="text-5xl font-bold text-center">
                            Be A Trainer
                        </h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Full Name"
                                defaultValue={user?.displayName}
                                className="input bg-white input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                defaultValue={user?.email}
                                readOnly
                                className="input bg-white input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input
                                type="number"
                                name="age"
                                placeholder="Enter Age"
                                className="input bg-white input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Profile Image
                                </span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter Profile Image"
                                defaultValue={user?.photoURL}
                                className="input bg-white input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Years of Experience
                                </span>
                            </label>
                            <input
                                type="number"
                                name="experience"
                                placeholder="Your experience"
                                className="input bg-white input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Available Time in a week
                                </span>
                            </label>
                            <input
                                type="number"
                                name="timeWeek"
                                placeholder="How many minutes per week can you give?"
                                className="input bg-white input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Available time in a day
                                </span>
                            </label>
                            <input
                                type="number"
                                name="timeDay"
                                placeholder="How many minutes per day can you give?"
                                className="input bg-white input-bordered"
                            />
                        </div>
                        <h4 className="text-center text-lg font-medium">
                            Select Your Skills
                        </h4>
                        <div className="grid grid-cols-3">
                            <div className="flex ">
                                <input
                                    type="checkbox"
                                    name="skill1"
                                    value="Cleanliness"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Cleanliness
                                    </span>
                                </label>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    name="skill2"
                                    value="Customer Service"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Customer Service
                                    </span>
                                </label>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    name="skill3"
                                    value="Front Desk"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Front Desk
                                    </span>
                                </label>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    name="skill4"
                                    value="Fitness Programs"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Fitness Programs
                                    </span>
                                </label>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    name="skill5"
                                    value="Group Training"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Group Training
                                    </span>
                                </label>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    name="skill6"
                                    value="Weight Loss"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Weight Loss
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="form-control">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BeATrainer;


