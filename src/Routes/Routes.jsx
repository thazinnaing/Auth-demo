import React from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth } from '../Provider/AuthProvider';


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
                    element: <div>User Home Page</div>,
                },
                {
                    path: "/profile",
                    element: <div>User Profile</div>,
                },
                {
                    path: "logout",
                    element: <></>,
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
            element: <></>
        },
        {
            path: "/register",
            element: <></>
        }
    ];

    const router= createBrowserRouter([
        ...publicRoutes,
        ...(!token ? AuthenticatedRoutes : []),
        ...unAuthenticatedRoutes,
    ]);

  return (
    <RouterProvider router={router} />
  );

}

export default Routes;
