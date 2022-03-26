import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import DataProvider from './components/DataProvider'
import Layout from './components/Layout';
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import ErrorPage from './pages/ErrorPage';
import data from './resources/data.json'

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index element={<Home data = {data}/>} />
              <Route path="pokemon/:id" element={<Pokemon pokemonData = {data}/>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>   
          </Suspense>
        </Layout>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
