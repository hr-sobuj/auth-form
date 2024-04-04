import DefaultLayout from "@layout/DefaultLayout";
import SignIn from '@pages/SingIn';
import { createBrowserRouter } from "react-router-dom";

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