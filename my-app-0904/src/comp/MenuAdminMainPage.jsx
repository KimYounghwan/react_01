import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function MenuAdminMainPage(props) {
    const navigate = useNavigate()

    return (
        <>
      <Button variant="primary" onClick={(e)=>{
                    navigate("/order")
                }}>메뉴판</Button>{' '}
      <Button variant="primary" onClick={(e)=>{
                    navigate("/admin/list")
                }}>메뉴관리</Button>{' '}
      <Button variant="primary" onClick={(e)=>{
                    navigate("/admin/order")
                }}>주문관리</Button>{' '}
            
        </>
    );
}

export default MenuAdminMainPage;