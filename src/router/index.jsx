import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";
import Purchases from "../pages/Purchases/Purchases";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import { homeLoader } from "./loaders/homeLoader";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                loader: homeLoader,
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/sign_up",
                element: <SignUp/>
            },
            {
                path: "/purchases",
                element: 
                ( <ProtectedRoute>
                    <Purchases/>
                  </ProtectedRoute> 
                ),
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                ),
            },
            {
                path: "product/:productId",
                element: <ProductDetail/>
            }
            
        ],
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]);