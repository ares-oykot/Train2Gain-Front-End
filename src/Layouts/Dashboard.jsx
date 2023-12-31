import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import {
    MdAccountBalance,
    MdClass,
    MdForum,
    MdManageAccounts,
    MdOutlineRememberMe,
    MdOutlineUnsubscribe,
} from "react-icons/md";
import { VscCompassActive } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import useAdmin from "../Hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";
const Dashboard = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const [isAdmin] = useAdmin();
    const [isTrainer] = useTrainer();
    return (
        <div className="flex gap-2 max-w-screen-xl mx-auto relative">
            <button
                className="z-50 absolute ml-2 mt-2 lg:hidden"
                onClick={handleToggle}
            >
                <TiThMenu className="text-blue-700 text-3xl"></TiThMenu>
            </button>
            <div
                className={`${
                    toggle
                        ? "bg-[#212432] text-white -left-0 duration-300 absolute h-full"
                        : "w-40 md:w-64 bg-[#212432] text-white min-h-[100vh] duration-300 -left-96 lg:left-0 absolute lg:relative lg:inline"
                }`}
            >
                <h3 className="text-center text-2xl md:text-4xl font-semibold mt-10">
                    Train2Gain
                </h3>
                <h4 className="text-center text-lg uppercase font-medium">
                    Dashboard
                </h4>
                <ul className="menu">
                    {isAdmin && (
                        <>
                            {/* Admin Routes */}
                            <li>
                                <NavLink to="/dashboard">
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allSubscriber">
                                    <MdOutlineUnsubscribe></MdOutlineUnsubscribe>
                                    All Subscribers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allTrainer">
                                    <FaUsers></FaUsers>
                                    All Trainers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/appliedTrainers">
                                    <FaBook></FaBook>
                                    Applied Trainer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/balance">
                                    <MdAccountBalance></MdAccountBalance>
                                    Balance
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addNewForumAdmin">
                                    <MdForum></MdForum>
                                    Add New Forum
                                </NavLink>
                            </li>
                        </>
                    )}
                    {isTrainer && (
                        <>
                            {/* Trainers Routes */}
                            <li>
                                <NavLink to="/dashboard/manageSlot">
                                    <MdManageAccounts />
                                    Manage Slots
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageMember">
                                    <MdOutlineRememberMe />
                                    Manage member
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addNewForumTrainer">
                                    <MdForum />
                                    Add new Forum
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addNewClass">
                                    <MdClass />
                                    Add new Class
                                </NavLink>
                            </li>
                        </>
                    )}
                    {!isAdmin && !isTrainer && (
                        <>
                            {/* Members Routes */}
                            <li>
                                <NavLink to="/dashboard/log">
                                    <VscCompassActive></VscCompassActive>
                                    Activity Log
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/profile">
                                    <CgProfile></CgProfile>
                                    Profile Settings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/recommendedClasses">
                                    <MdClass />
                                    Recommended Classes
                                </NavLink>
                            </li>
                        </>
                    )}
                    <hr className="my-10" />
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 min-h-[100vh] lg:p-8 mt-1 bg-sky-100">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
