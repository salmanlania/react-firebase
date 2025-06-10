import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "../component/header/Navbar";
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";
import ErrorPage from "../component/error/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Navbar />,
            },
            {
                path: '/signup',
                element: <SignupPage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/signin',
                element: <LoginPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (

        <div>
            <Navbar />
            <Outlet />
        </div>

    )
}
export default Router