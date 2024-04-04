import DefaultLayout from "@layout/DefaultLayout";
import AccountType from "@pages/AccountType";
import Business from "@pages/Business";
import Individual from "@pages/Individual";
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
    },
    {
        path: "/account-type",
        element: <DefaultLayout><AccountType /></DefaultLayout>,
    },
    {
        path: "/sign-up",
        element: <DefaultLayout><ShowSigningInfo /></DefaultLayout>,
    },
    {
        path: "/personal-sign-up",
        element: <DefaultLayout><Individual /></DefaultLayout>,
    },
    {
        path: "/business-sign-up",
        element: <DefaultLayout><Business /></DefaultLayout>,
    }

]

export const router = createBrowserRouter(routeMap, {
    future: {
        v7_normalizeFormMethod: true,
    },
});