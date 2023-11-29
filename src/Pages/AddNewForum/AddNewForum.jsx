import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAdmin from "../../Hooks/useAdmin";
import useTrainer from "../../Hooks/useTrainer";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddNewForum = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isTrainer] = useTrainer();
    const axiosSecure = useAxiosSecure();
    let role = "";
    if (isAdmin) {
        role = "admin";
    }
    if (isTrainer) {
        role = "trainer";
    }
    const getCurrentDate = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
        const [month, day, year] = formattedDate.split("/");
        const rearrangedDate = `${month}-${day}-${year}`;
        return rearrangedDate;
    };

    const currentDate = getCurrentDate();
    const handleAddForum = (event) => {
        event.preventDefault();
        const form = event.target;
        const details = form.details.value;
        const heading = form.heading.value;
        const subHeading = form.subHeading.value;
        const postOwnerEmail = form.postOwnerEmail.value;
        const thumbNail = form.thumbNail.value;
        const postInfo = {
            details,
            heading,
            subHeading,
            postOwnerEmail,
            thumbNail,
            role,
            uploadDate: currentDate,
            like: "0",
            unLike: "0",
        };
        axiosSecure.post("/blog", postInfo).then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Blog posted Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                event.target.reset();
            }
        });
    };
    return (
        <div>
            <div className="md:w-1/2 mx-auto shadow-xl">
                <form onSubmit={handleAddForum} className="px-8 card-body">
                    <h1 className="text-5xl font-bold text-center">
                        Add New Forum
                    </h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Heading</span>
                        </label>
                        <input
                            type="text"
                            name="heading"
                            placeholder="Enter Forum Heading"
                            className="input bg-white input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Heading</span>
                        </label>
                        <input
                            type="text"
                            name="subHeading"
                            placeholder="Enter Forum Sub Heading"
                            className="input bg-white input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input
                            type="text"
                            name="details"
                            placeholder="Enter Post Details"
                            className="input bg-white input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Post Owner Email</span>
                        </label>
                        <input
                            type="email"
                            name="postOwnerEmail"
                            defaultValue={user?.email}
                            readOnly
                            className="input bg-white input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Post Thumbnail</span>
                        </label>
                        <input
                            type="text"
                            name="thumbNail"
                            placeholder="Enter Post Thumbnail"
                            className="input bg-white input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="post"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewForum;
