import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerExample from './bs/ContainerExample';
import AutoLayoutExample from './bs/AutoLayoutExample';
import AutoLayoutSizingExample from './bs/AutoLayoutSizingExample';
import VerticalExample from './bs/VerticalExample';
import BasicExample from './bs/BasicExample';
import HorizontalExample from './bs/HorizontalExample';
import GawibawiboGame from './gbb2_bs/GawibawiboGame';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GawibawiboGame />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
