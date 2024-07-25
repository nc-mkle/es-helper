import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LandingPage} from "./pages/LandingPage";

export const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage/>,
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}