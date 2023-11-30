import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import swal from "sweetalert";

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        updateUserProfile(displayName, photoURL)
            .then(() => {
                swal("Nice!!", "User Sign Up successful", "success");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className="bg-lime-100 rounded-t-2xl max-w-screen-xl mx-auto">
            <div className="bg-sky-200 py-16 rounded-2xl">
                <SectionTitle heading="Your Profile"></SectionTitle>
            </div>
            <img
                className="w-96 rounded-full mx-auto"
                src={user?.photoURL}
                alt=""
            />
            <h1 className="text-6xl text-center font-bold">
                Name: {user?.displayName}
            </h1>
            <div className="flex justify-center">
                <form onSubmit={handleUpdateProfile} className="w-3/5 mb-20">
                    <label className="form-control ">
                        <div className="label">
                            <span className="label-text text-3xl font-medium">
                                Update Your Name
                            </span>
                        </div>
                        <input
                            name="displayName"
                            type="text"
                            placeholder="Your Name"
                            defaultValue={user?.displayName}
                            className="input input-bordered"
                        />
                        <div className="label">
                            <span className="label-text text-3xl font-medium">
                                Update Your Photo URL
                            </span>
                        </div>
                        <input
                            name="photoURL"
                            type="text"
                            placeholder="Your Photo URL"
                            className="input input-bordered"
                            defaultValue={user?.photoURL}
                        />
                        <input type="submit" className="btn mt-5 text-2xl btn-success text-white" value="Update" />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Profile;
