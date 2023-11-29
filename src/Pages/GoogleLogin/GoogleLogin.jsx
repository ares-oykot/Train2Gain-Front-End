import { useContext } from "react";
import google from "../../assets/ico/google.png"
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const handleGoogleSignUp = () => {
        googleSignIn()
            .then((result) => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                    role: "user",
                };
                axiosPublic.post("/users", userInfo).then(() => {
                    swal("Nice!!", "User Login successful", "success");
                    // navigate("/");
                }); 
            })
            .catch((error) => {
                swal("Oops!!", `${error.message}`, "error");
            });
    };
    return (
            <div
                onClick={handleGoogleSignUp}
                className="mt-10 w-full bg-gradient-to-r from-green-400 to-red-500 duration-500 hover:from-red-500 hover:to-green-400 rounded-3xl flex justify-center items-center gap-1 py-2 cursor-pointer"
            >
                <img
                    className="w-8 p-1 h-8 rounded bg-white "
                    src={google}
                    alt=""
                />
                <p className="text-lg font-semibold text-white">
                    Sign Up With Google
                </p>
            </div>
    );
};

export default GoogleLogin;