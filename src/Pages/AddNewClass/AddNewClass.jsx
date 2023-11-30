import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddNewClass = () => {
    const axiosSecure = useAxiosSecure();
    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const newClass = form.class.value;
        const description = form.description.value;
        const classInfo = {class: newClass, description};
        axiosSecure.post("/addClasses", classInfo).then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Classes Added Successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                event.target.reset();
            }
        });
    }
    return (
        <div>
            <div className="md:w-1/2 mx-auto shadow-xl">
                <form onSubmit={handleAddClass} className="px-8 card-body">
                    <h1 className="text-5xl font-bold text-center">
                        Add New Classes
                    </h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class</span>
                        </label>
                        <input
                            type="text"
                            name="class"
                            placeholder="Enter Class Name"
                            className="input bg-white input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter Classes Description"
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

export default AddNewClass;