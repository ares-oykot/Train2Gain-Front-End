import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import BeATrainer from "../Pages/beATrainer/beATrainer";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import AppliedTrainers from "../Pages/AppliedTrainers/AppliedTrainers";

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
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            // users routes
            {},
            // trainers routes
            {},
            // admin routes
            {
                path: "/dashboard/appliedTrainers",
                element: <AppliedTrainers></AppliedTrainers>,
            },
        ],
    },
]);