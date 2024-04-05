import DefaultLayout from "@layout/DefaultLayout";
import Accounts from "@pages/Accounts";
import AccountType from "@pages/AccountType";
import ShowInfo from "@pages/ShowInfo";
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
        path: "/show",
        element: <DefaultLayout><ShowInfo /></DefaultLayout>,
    },
    {
        path: "/accounts",
        element: <DefaultLayout><Accounts /></DefaultLayout>,
    },

]

export const router = createBrowserRouter(routeMap, {
    future: {
        v7_normalizeFormMethod: true,
    },
});