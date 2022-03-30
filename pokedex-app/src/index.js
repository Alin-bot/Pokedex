import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from './components/Layout';
import { DataProvider } from './components/DataProvider/DataProvider';

import './index.css';

const Home = lazy(() => import('./pages/Home'));
const Pokemon = lazy(() => import('./pages/Pokemon'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="pokemon/:id" element={<Pokemon/>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>   
          </Suspense>
        </Layout>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
