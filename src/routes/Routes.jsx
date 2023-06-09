/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch(`https://lovely-food-network-server-developersharif1919.vercel.app/topChef/`)
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: "/ChefRecipe/:id",
                element: (
                  <PrivateRoute>
                    <ChefRecipe></ChefRecipe>
                  </PrivateRoute>
                ),
                loader: ({params}) => fetch(`https://lovely-food-network-server-developersharif1919.vercel.app/topChef/${params.id}`)
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