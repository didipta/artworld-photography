import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Error/Error";
import Home from "../Homepage/Home";
export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
              path:"/",
              element:<Home></Home>
            }
        ]

    },
    {
        path:"*",
        element:<Error></Error>
    }
])