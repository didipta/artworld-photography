import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Error/Error";
import Home from "../Homepage/Home";
import Service from "../Service/Service";
import Servicedetail from "../Service/Servicedetail";
import Signin from "../Login&registation/Signin";
import Registration from "../Login&registation/Registration";
import Profile from "../profile/Profile";
import Privetrouter from "./Privetrouter";
import Addservice from "../Add_service/Addservice";
export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
              path:"/",
              element:<Home></Home>
            },
            {
                path:"/service",
                element:<Service></Service>
            },
            {
                path:"services/:id",
                loader:(({params})=>fetch(`https://server-side-beta.vercel.app/services/${params.id}`)),
                element:<Servicedetail></Servicedetail>
            },
            {
                path:"/Loginpage",
                element:<Signin></Signin>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/profile",
                element:<Privetrouter><Profile></Profile></Privetrouter>
            },
            {
                path:"/Addservice",
                element:<Privetrouter><Addservice></Addservice></Privetrouter>
            }
        ]

    },
    {
        path:"*",
        element:<Error></Error>
    }
])