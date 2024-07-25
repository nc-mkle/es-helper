import React from 'react';
import './App.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {StandardFrame} from "./pages/StandardFrame";
import {ErrorPage} from "./pages/ErrorPage";
import {LandingPage} from "./pages/LandingPage";
import {TestPage} from "./pages/TestPage";

export const App = () => {

    const router = createHashRouter([
        {
            path: "/",
            element: <StandardFrame/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    index: true,
                    element: <LandingPage/>,
                },
                {
                    path: "/test",
                    element: <TestPage/>,
                }
            ],
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}