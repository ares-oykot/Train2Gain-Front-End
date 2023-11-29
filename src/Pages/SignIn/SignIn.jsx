import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import facebook from "../../assets/ico/facebook(1).png";
import twitter from "../../assets/ico/twitter.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(() => {
                swal("Nice!!", "User sign in successful", "success");
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                swal("Oops!!", `${error.message}`, "error");
            });
    };
    return (
        <div>
            <div className="mb-20">
                <div className="max-w-screen-xl mx-auto">
                    <form
                        onSubmit={handleLogin}
                        className="lg:w-2/5 mx-auto rounded-t-xl rounded-b-xl shadow-xl pb-10 my-10"
                    >
                        <h1 className="py-6 rounded-t-xl  bg-[#6FB554] text-center text-white font-bold text-3xl">
                            Sign In
                        </h1>
                        <div className="px-7">
                            <GoogleLogin></GoogleLogin>
                            <div className="mt-5 bg-[#476cc1] hover:bg-[#2b437b] duration-200 rounded-3xl flex justify-center items-center gap-1 py-2 cursor-pointer">
                                <img
                                    className="w-8 h-8 rounded bg-white "
                                    src={facebook}
                                    alt=""
                                />
                                <p className="text-lg font-semibold text-white">
                                    Sign In With Facebook
                                </p>
                            </div>
                            <div className="mt-5 bg-[#64b7ff] duration-200 hover:bg-[#2778c0] rounded-3xl flex justify-center items-center gap-1 py-2 cursor-pointer">
                                <img
                                    className="w-8 h-8 rounded-lg bg-white "
                                    src={twitter}
                                    alt=""
                                />
                                <p className="text-lg font-semibold text-white">
                                    Sign In With Twitter
                                </p>
                            </div>
                            <p className="text-lg font-medium text-center mt-5">
                                Sign In With Email & Password
                            </p>
                            <div className="mt-5 form-control">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input rounded-3xl input-bordered"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <input
                                    className="input  rounded-3xl mt-5 input-bordered w-full"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Enter Your Password"
                                    required
                                />
                                <span
                                    className="absolute right-4 bottom-4 cursor-pointer text-lg"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <AiFillEye></AiFillEye>
                                    ) : (
                                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                    )}
                                </span>
                            </div>
                            <label className="label justify-center">
                                <a
                                    href="#"
                                    className="label-text-alt link  link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                            <input
                                className="w-full mt-2 bg-[#476cc1] hover:bg-[#2b437b] duration-200 rounded-3xl flex justify-center items-center gap-1 py-2 text-lg font-semibold text-white"
                                type="submit"
                                value="Sign In"
                            />
                            <p className="text-center mt-2">
                                New to this website? Please{" "}
                                <Link to="/signUp" className="text-blue-400">
                                    Sign Up Here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
