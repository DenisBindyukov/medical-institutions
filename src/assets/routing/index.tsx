import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../../App";
import Nurses from "../../pages/nurse";
import Doctors from "../../pages/doctor";
import {ErrorPage} from "../../components/error-page/ErrorPage";
import {PATH} from "./paths";


export const router = createBrowserRouter([
    {
        path: PATH.BASE,
        element: <App/>,
        errorElement: <Navigate to={PATH.NOT_FOUND}/>,
        children: [
            {
                index: true,
                element: <Navigate to={PATH.DOCTORS}/>
            },
            {
                path: PATH.DOCTORS,
                element: <Doctors/>,
            },
            {
                path: PATH.NURSES,
                element: <Nurses/>,
            },
        ],
    },
    {
        path: PATH.NOT_FOUND,
        element: <ErrorPage/>
    },
]);
