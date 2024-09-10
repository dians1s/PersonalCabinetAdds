import React from "react";
import { Route, Routes } from "react-router-dom";
import AdsPage from "../pages/AdsPage";
import OrdersPage from "../pages/OrdersPage";
import Error404 from "../pages/Error404";
import AdPage from "../pages/AdPage";

const AppRouter = () => {

    return(
    <Routes>
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/ads/:id" element={<AdPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
    )
}

export default AppRouter;