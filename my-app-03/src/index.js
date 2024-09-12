import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './ch07/Counter';
import Toggle from './ch08/Toggle';
import NumberGuess from './ch08/NumberGuess';
import WarningBanner from './ch09/WarningBanner';
import NumberList from './ch10/NumberList';
import MyMemo from './ch10/MyMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
const numbers = [1,2,3,4,5]
root.render(
  <React.StrictMode>
    <NumberGuess />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
