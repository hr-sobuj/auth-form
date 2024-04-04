import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./../layout/DefaultLayout";
import SignIn from './../pages/SingIn';

const routeMap = [
    {
        path: "/",
        element: <DefaultLayout><SignIn /></DefaultLayout>,
    }
]

export const router = createBrowserRouter(routeMap, {
    future: {
        v7_normalizeFormMethod: true,
    },
});