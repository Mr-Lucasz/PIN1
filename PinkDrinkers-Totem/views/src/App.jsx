import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.module.css';
import {StartPage} from './pages/StartPage/StartPage.jsx';
import {HomePage} from './pages/Homepage.jsx';



export function App() {

  return (
    <div className="App">
      <Routes>
        {/* Componente da tela inicial */}
        <Route index element={<StartPage />} />
        {/* Adicione esta rota */}
        <Route path="/start" element={<StartPage />} />
        {/* Rota para a página inicial */}
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}
