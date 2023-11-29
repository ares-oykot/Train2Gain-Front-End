import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/gym.png"

const Navbar = () => {
    const user = true;
    const navLinks = (
        <>
            <div className="flex flex-col lg:flex-row lg:gap-5 ">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "text-sky-500 lg:font-semibold lg:border-b-2 lg:duration-200 lg:hover:mx-2 border-sky-600"
                                : "text-black    lg:duration-200 lg:hover:mr-2"
                        }
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gallery"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "text-sky-500 lg:font-semibold lg:border-b-2 lg:duration-200 lg:hover:mx-2 border-sky-600"
                                : "text-black lg:duration-200 lg:hover:mx-2"
                        }
                    >
                        GALLERY
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/trainers"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "text-sky-500 lg:font-semibold lg:border-b-2 lg:duration-200 lg:hover:mx-2 border-sky-600"
                                : "text-black lg:duration-200 lg:hover:mx-2"
                        }
                    >
                        TRAINER
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/classes"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "text-sky-500 lg:font-semibold lg:border-b-2 lg:duration-200 lg:hover:mx-2 border-sky-600"
                                : "text-black lg:duration-200 lg:hover:mx-2"
                        }
                    >
                        CLASSES
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "text-sky-500 lg:font-semibold lg:border-b-2 lg:duration-200 lg:hover:mx-2 border-sky-600"
                                : "text-black lg:duration-200 lg:hover:mx-2"
                        }
                    >
                        DASHBOARD
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/community"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "text-sky-500 lg:font-semibold lg:border-b-2 lg:duration-200 lg:hover:mx-2 border-sky-600"
                                : "text-black lg:duration-200 lg:hover:mx-2"
                        }
                    >
                        COMMUNITY
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/signIn"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "text-sky-500 lg:font-semibold lg:border-b-2 lg:duration-200 lg:hover:mx-2 border-sky-600"
                                : "text-black lg:duration-200 lg:hover:ml-2"
                        }
                    >
                        SIGN IN
                    </NavLink>
                </li>
            </div>
        </>
    );
    return (
        <div className="navbar shadow-lg max-w-full">
            <div className="md:navbar-start">
                <div className="flex items-center gap-2">
                    <img className="h-12 hidden lg:inline" src={logo} alt="" />
                    <h1 className="text-5xl hidden lg:inline font-black text-sky-400">
                        Train2Gain
                    </h1>
                </div>
                <div className="dropdown z-50">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu-sm bg-sky-200 dropdown-content mt-3 z-[1] p-2 shadow w-36 rounded-xl"
                    >
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="md:mr-12 lg:hidden z-50">
                <img className="h-6 md:h-14 lg:hidden" src={logo} alt="" />
                <h1 className="text-2xl md:text-6xl ml-3 md:ml-2 font-black text-sky-400">
                    Train2Gain
                </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                {user?.displayName ? (
                    <p className="text-[6px] md:text-base font-bold mr-1 md:mr-2 py-1 md:py-2 bg-sky-300 md:px-2 w-full text-center md:w-48 rounded md:rounded-3xl">
                        {user.displayName}
                    </p>
                ) : (
                    ""
                )}
                <div className="dropdown z-50 dropdown-hover">
                    <label tabIndex={0} className="">
                        <div className="w-8 h-8 md:h-10 md:w-10">
                            {user?.photoURL ? (
                                <img
                                    className="rounded-full w-full h-full"
                                    src={user?.photoURL}
                                />
                            ) : (
                                <img className="rounded-full" src="" />
                            )}
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu  shadow bg-base-100 rounded p-1 w-32  right-0"
                    >
                        {user ? (
                            <button
                                // onClick={handleSignOut}
                                className=" bg-sky-500 w-full text-white px-6 py-2 duration-300 rounded-sm"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link to="/signIn">
                                <button className=" bg-sky-500 w-full text-white px-6 py-2 duration-300 rounded-sm">
                                    Login
                                </button>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;