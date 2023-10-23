import React from 'react';
import ProtectedRoutes from "./ProtectedRoutes"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth } from '../Provider/AuthProvider';
import Login from '../Pages/Login';
import Logout from '../Pages/Logout';

const Routes = () => {
    const {token}=useAuth();

    const publicRoutes=[
        {
            path: "/service",
            element : <div>Service Page</div>
        },
        {
            path: "/about-us",
            element: <div>About Us</div>
        }
    ];

    const AuthenticatedRoutes=[
        {
            path: "/",
            element: <ProtectedRoutes/>,
            children: [
                {
                    path: "",
                    element: <div>User Personal Home Page</div>,
                },
                {
                    path: "/profile",
                    element: <div>User Personal Profile</div>,
                },
                {
                    path: "/logout",
                    element: <Logout/>,
                },

            ],
        },
    ];

    const unAuthenticatedRoutes=[
        {
            path: "/",
            element: <div>Home Page</div>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <div>Register Page</div>
        }
    ];

    const router= createBrowserRouter([
        ...publicRoutes,
        ...(!token ? unAuthenticatedRoutes : []),
        ...AuthenticatedRoutes,
    ]);

  return (
    <RouterProvider router={router} />
  );

}

export default Routes;
