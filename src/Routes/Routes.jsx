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
import Community from "../Pages/Community/Community";
import Classes from "../Pages/Classes/Classes";
import AddNewClass from "../Pages/AddNewClass/AddNewClass";
import ActivityLog from "../Pages/ActivityLog/ActivityLog";
import Profile from "../Pages/Profile/Profile";
import RecommendedClasses from "../Pages/RecommendedClasses/RecommendedClasses";
import Error from "../Pages/Error/Error";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                element: (
                    <PrivetRoute>
                        <BeATrainer></BeATrainer>
                    </PrivetRoute>
                ),
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
                element: (
                    <PrivetRoute>
                        <Trainers></Trainers>
                    </PrivetRoute>
                ),
            },
            {
                path: "/trainerDetails/:id",
                element: (
                    <PrivetRoute>
                        <TrainerDetails></TrainerDetails>
                    </PrivetRoute>
                ),
            },
            {
                path: "/trainerBooked/:email/:slot",
                element: (
                    <PrivetRoute>
                        <TrainerBooked></TrainerBooked>
                    </PrivetRoute>
                ),
            },
            {
                path: "/community",
                element: <Community></Community>,
            },
            {
                path: "/classes",
                element: <Classes></Classes>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivetRoute>
                <Dashboard></Dashboard>
            </PrivetRoute>
        ),
        children: [
            // users routes
            {
                path: "/dashboard/log",
                element: <ActivityLog></ActivityLog>,
            },
            {
                path: "/dashboard/profile",
                element: <Profile></Profile>,
            },
            {
                path: "/dashboard/recommendedClasses",
                element: <RecommendedClasses></RecommendedClasses>,
            },
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
            {
                path: "/dashboard/addNewClass",
                element: <AddNewClass></AddNewClass>,
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
