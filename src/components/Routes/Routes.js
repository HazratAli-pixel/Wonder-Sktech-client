import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import MyReview from "../MyReview/MyReview";
import Profile from "../Profile/Profile";
import Privateroute from "../Routes/Privateroute";
import Addservice from "../Service/Addservice";
import Allservice from "../Service/Allservice";
import Servicedetails from "../Service/Servicedetails";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

export const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            },
            {
                path:'signin',
                element:<Signin></Signin>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'profile',
                element: <Privateroute><Profile/></Privateroute>,
            },
            {
                path:'servicelist',
                element: <Allservice></Allservice>,
            },
            {
                path:'addservice',
                element: <Privateroute><Addservice></Addservice></Privateroute>,
            },
            {
                path:'myreview',
                element: <Privateroute><MyReview></MyReview></Privateroute>
            },
            {
                path:'service/:id',
                loader:({params})=>{
                    return fetch(`https://wondersketches-hazratali-pixel.vercel.app/service/${params.id}`)
                },
                element: <Servicedetails></Servicedetails>,
            },
        ]
    },
]);