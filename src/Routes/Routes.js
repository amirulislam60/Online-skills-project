import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Category from "../Components/Category/Category";
import Courses from "../Components/Courses/Courses";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/courses`)
            },

            {
                path:'/blog',
                element:<Blog></Blog>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            
        ]
    }

])