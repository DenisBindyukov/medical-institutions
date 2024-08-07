import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import {router} from "./assets/routing";
import {DataProvider} from "./assets/context/StaffContextProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <DataProvider>
        <RouterProvider router={router}/>
    </DataProvider>
);

reportWebVitals();
