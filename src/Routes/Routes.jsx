import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import BeATrainer from "../Pages/beATrainer/beATrainer";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import AppliedTrainers from "../Pages/AppliedTrainers/AppliedTrainers";
import Trainers from "../Pages/Trainers/Trainers";
import TrainerDetails from "../Pages/TrainerDetails/TrainerDetails";
import TrainerBooked from "../Pages/TrainerBooked/TrainerBooked";
import AllSubscriber from "../Pages/AllSubscriber/AllSubscriber";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";
import Payment from "../Pages/Payment/Payment";
import AdminHome from "../Pages/AdminHome/AdminHome";
import ManageSlot from "../Pages/ManageSlot/ManageSlot";
import ManageMember from "../Pages/ManageMember/ManageMember";
import AddNewForum from "../Pages/AddNewForum/AddNewForum";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>,
            },
            {
                path: "/beATrainer",
                element: <BeATrainer></BeATrainer>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>,
            },
            {
                path: "/trainers",
                element: <Trainers></Trainers>,
            },
            {
                path: "/trainerDetails/:id",
                element: <TrainerDetails></TrainerDetails>,
            },
            {
                path: "/trainerBooked/:email/:slot",
                element: <TrainerBooked></TrainerBooked>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            // users routes
            {},
            // trainers routes
            {
                path: "/dashboard/manageSlot",
                element: <ManageSlot></ManageSlot>,
            },
            {
                path: "/dashboard/manageMember",
                element: <ManageMember></ManageMember>,
            },
            {
                path: "/dashboard/addNewForumTrainer",
                element: <AddNewForum></AddNewForum>,
            },
            // admin routes
            {
                path: "/dashboard/adminHome",
                element: <AdminHome></AdminHome>,
            },
            {
                path: "/dashboard/appliedTrainers",
                element: <AppliedTrainers></AppliedTrainers>,
            },
            {
                path: "/dashboard/allSubscriber",
                element: <AllSubscriber></AllSubscriber>,
            },
            {
                path: "/dashboard/allTrainer",
                element: <AllTrainer></AllTrainer>,
            },
            {
                path: "/dashboard/balance",
                element: <Payment></Payment>,
            },
            {
                path: "/dashboard/addNewForumAdmin",
                element: <AddNewForum></AddNewForum>,
            },
        ],
    },
]);
