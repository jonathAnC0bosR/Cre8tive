import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Auth from "./utils/auth";


const protectedRoutes = ({children}) =>{
    const isLoggedIn = Auth.loggedIn();
    if (!isLoggedIn) {
        return <Navigate to= "/login"/>;
    }
    return children ? children : <Outlet/>;
};

export default protectedRoutes;