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


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch(`http://localhost:5000/topChef/`)
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
                loader: ({params}) => fetch(`http://localhost:5000/topChef/${params.id}`)
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