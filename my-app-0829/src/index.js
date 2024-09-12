import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MenupanCrud01 from './comp/MenupanCrud01';
import OrderCrud from './comp/OrderCrud';
import UserFormSpring01 from './comp/UserFormSpring01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserFormSpring01 />
  </React.StrictMode>
);

