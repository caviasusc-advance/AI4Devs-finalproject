import React from "react";
import Signin from "@/screens/Signin";
import Login from "@/screens/Login";
import Home from "@/screens/Home";
import Transactions from "@/screens/Transactions";
import ErrorScreen from "@/screens/ErrorScreen";
import UnSignedLayout from "@/components/layout/UnSignedLayout";
import SignedLayout from "@/components/layout/SignedLayout";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    createRoutesFromElements
} from "react-router-dom";

const AppRoute = ({component: Component, logged=true, ...rest}) => { 
    if(logged)
    return 
        <Route
        {...rest}
        component={
        <Layout>  
            <Component {...props} />  
        </Layout>  
        } />  
}; 


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route
            element={<SignedLayout />}
            errorElement={<ErrorScreen />}
        >
            <Route path="/" element={<Home/>}/>
            <Route path="/transaction" element={<Transactions/>}/>
        </Route>
        <Route
            element={<UnSignedLayout />}
            errorElement={<ErrorScreen />}
        >
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>
    </>
  ));

export default function AppRoutes(props) {
    return (
        <RouterProvider router={router} />
    );
  }