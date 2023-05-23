import React, { useState } from 'react';
import './components/LoginPage/LoginStyle.css';
import './App.css';
import Login from './components/LoginPage/Login';
import HomePage from './components/TelaInicialPage/HomePage';
import CadastroProduto from './components/CadastroProdutoPage/CadastroProduto';
import Relatorio from './components/RelatorioPage/Relatorio';
import GerenciarMaquina from './components/GerenciarMaquinaPage/GerenciarMaquina';
import AdicionarMaquina from './components/GerenciarMaquinaPage/AdicionarMaquina';
import { Routes, Route} from "react-router-dom";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <div className="App">
    <Routes>
        {/* Componente da tela inicial */}
        <Route index element={<Login/>} />
        {/* Adicione esta rota */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        {/* Rota para a página inicial */}
        <Route path="/home" element={<HomePage isAuthenticated={isAuthenticated} />} />

        <Route path="/cadastro-produto" element={<CadastroProduto isAuthenticated={isAuthenticated} />} />
        <Route path="/relatorio" element={<Relatorio isAuthenticated={isAuthenticated} />} />
        <Route path="/gerenciar-maquina" element={<GerenciarMaquina isAuthenticated={isAuthenticated} />} />
        <Route path="/adicionar-maquina" element={<AdicionarMaquina isAuthenticated={isAuthenticated} />} />
      </Routes>
    </div>
  );
}

export default App;
