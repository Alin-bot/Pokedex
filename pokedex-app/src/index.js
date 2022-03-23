import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Pokemon from "./pages/pokemon_description/Pokemon";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import data from './resources/data.json'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home data = {data}/>} />
        <Route path="/home/:error" element={<ErrorPage />} />
        <Route path="/home/pokemon/:id" element={<Pokemon pokemonData = {data}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
