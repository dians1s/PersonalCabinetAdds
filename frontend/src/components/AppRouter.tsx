import React from "react";
import { Route, Routes } from "react-router-dom";
import AdsPage from "../pages/AdsPage";
import OrdersPage from "../pages/OrdersPage";
import Error404 from "../pages/Error404";
import AdPage from "../pages/AdPage";

interface AppRouterProps {
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
}

const AppRouter: React.FC<AppRouterProps> = ({modalActive, setModalActive}) => {
    return(
    <Routes>
        <Route path="/" element={<AdsPage modalActive={modalActive} setModalActive={setModalActive}/>} /> {/* Можно изменить на главную страницу */}
        <Route path="/ads" element={<AdsPage modalActive={modalActive} setModalActive={setModalActive}/>} />
        <Route path="/ads/:id" element={<AdPage />} />
        <Route path="/orders" element={<OrdersPage modalActive={modalActive} setModalActive={setModalActive} />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
    )
}

export default AppRouter;