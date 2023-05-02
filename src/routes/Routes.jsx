/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            }
        ],
    },
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
])



export default router;