import React from "react";
import { Route, Routes } from "react-router-dom";
import AdsPage from "../pages/AdsPage";
import OrdersPage from "../pages/OrdersPage";
import Error404 from "../pages/Error404";
import AdPage from "../pages/AdPage";

interface AppRouterProps {
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
    setActivePage: (activePage: string) => void;
}

const AppRouter: React.FC<AppRouterProps> = ({modalActive, setModalActive, setActivePage}) => {
    return(
    <Routes>
        <Route path="/" element={<AdsPage modalActive={modalActive} setModalActive={setModalActive} setActivePage={setActivePage}/>} /> {/* Можно изменить на главную страницу */}
        <Route path="/ads" element={<AdsPage modalActive={modalActive} setModalActive={setModalActive} setActivePage={setActivePage}/>} />
        <Route path="/ads/:id" element={<AdPage modalActive={modalActive} setModalActive={setModalActive} setActivePage={setActivePage} />}/>
        <Route path="/orders" element={<OrdersPage modalActive={modalActive} setModalActive={setModalActive} setActivePage={setActivePage}/>} />
        <Route path="*" element={<Error404 />}/>
    </Routes>
    )
}

export default AppRouter;