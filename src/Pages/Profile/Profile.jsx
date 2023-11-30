import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="bg-lime-100 h-[100vh]">
            <div className="bg-sky-200 py-16 rounded-2xl">
                <SectionTitle heading="Your Profile"></SectionTitle>
            </div>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Profile;