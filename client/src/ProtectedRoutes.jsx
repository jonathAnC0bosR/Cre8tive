import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Login from "./components/Pages/Login/Login";
import auth from "./utils/auth";


const protectedRoutes = () =>{
    const isLoggedIn = auth.loggedIn();
    return isLoggedIn ? <Outlet/> : <Navigate to= "/login" />;
};

export default protectedRoutes;