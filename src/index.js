import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './layout/stylesheet.css';
import './layout/download.css';
import Counter from './components/counter';
import Login from './components/login';
import Downloads from './components/downloads';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/appduty';


export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route index element={<Counter />} />
        <Route path='downloads' element={<Downloads />}/>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Application />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

