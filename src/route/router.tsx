import DefaultLayout from "@layout/DefaultLayout";
import ShowSigningInfo from "@pages/ShowSigningInfo";
import SignIn from '@pages/SingIn';
import { createBrowserRouter } from "react-router-dom";

const routeMap = [
    {
        path: "/",
        element: <DefaultLayout><SignIn /></DefaultLayout>,
    },
    {
        path: "/sign-in",
        element: <DefaultLayout><SignIn /></DefaultLayout>,
    },
    {
        path: "/sign-in-info",
        element: <DefaultLayout><ShowSigningInfo /></DefaultLayout>,
    }
]

export const router = createBrowserRouter(routeMap, {
    future: {
        v7_normalizeFormMethod: true,
    },
});