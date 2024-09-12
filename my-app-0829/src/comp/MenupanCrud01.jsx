import React from 'react';
import MenuAdminInputPage from './MenuAdminInputPage';
import MenuAdminListPage from './MenuAdminListPage';
import MenuAdminUpdatePage from './MenuAdminUpdatePage';
import MenuAdminMainPage from './MenuAdminMainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import MenuOrderPage from './MenuOrderPage';
import MenuAdminOrderPage from './MenuAdminOrderPage';
import MenuAdminOrderDetailPage from './MenuAdminOrderDetailPage';


function MenupanCrud01(props) {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<MenuAdminMainPage />}></Route>
                <Route path="/admin/list" element={<MenuAdminListPage />}></Route>
                <Route path="/admin/input" element={<MenuAdminInputPage />}></Route>
                <Route path="/admin/update/:menuno" element={<MenuAdminUpdatePage />}></Route>
                <Route path="/order" element={<MenuOrderPage />}></Route>
                <Route path="/admin/order" element={<MenuAdminOrderPage />}></Route>
                <Route path="/admin/orders/:orderNo/details" element={<MenuAdminOrderDetailPage />}></Route>
                <Route path="/*" element={<NotFoundPage />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default MenupanCrud01;