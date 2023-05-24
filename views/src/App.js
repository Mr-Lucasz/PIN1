import React, { useState } from 'react';
import './components/LoginPage/LoginStyle.css';
import './App.css';
import Login from './components/LoginPage/Login';
import HomePage from './components/TelaInicialPage/HomePage';
import CadastroProduto from './components/CadastroProdutoPage/CadastroProduto';
import Relatorio from './components/RelatorioPage/Relatorio';
import GerenciarMaquina from './components/GerenciarMaquinaPage/GerenciarMaquina';
import AdicionarMaquina from './components/GerenciarMaquinaPage/AdicionarMaquina';
import EditarMaquina from './components/GerenciarMaquinaPage/EditarMaquina';
import CadastroSolicitacao from './components/SolicitacaoReposicao/CadastroSolicitacao';
import GerenciarReposicao from './components/SolicitacaoReposicao/GerenciarReposicao';
import EditarReposicao from './components/SolicitacaoReposicao/EditarReposicao';
import CadastroFuncionario from './components/Admin-CadastroUserPage/CadastroFuncionario.jsx';
import AdminHomePage from './components/Admin--TelaInicialPage/AdminHomePage.jsx';
import { Routes, Route} from "react-router-dom";
import InsertFuncionario from './components/Admin-CadastroUserPage/IncluirUsuarioPage/insertFuncPage.jsx';
import UptadeFuncionario from './components/Admin-CadastroUserPage/AlterarUsuarioPage/UptadeFuncionario.jsx';



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
        <Route path="/admin-home" element={<AdminHomePage isAuthenticated={isAuthenticated} />} />
        <Route path="/cadastro-produto" element={<CadastroProduto isAuthenticated={isAuthenticated} />} />
        <Route path="/relatorio" element={<Relatorio isAuthenticated={isAuthenticated} />} />
        <Route path="/solicitacao_reposicao" element={<CadastroSolicitacao isAuthenticated={isAuthenticated} />} />
        <Route path="/editar_reposicao/:id_reposicao" element={<EditarReposicao isAuthenticated={isAuthenticated} />} />
        <Route path="/gerenciar_reposicao" element={<GerenciarReposicao isAuthenticated={isAuthenticated} />} />
        <Route path="/gerenciar-maquina" element={<GerenciarMaquina isAuthenticated={isAuthenticated} />} />
        <Route path="/adicionar-maquina" element={<AdicionarMaquina isAuthenticated={isAuthenticated} />} />
        <Route path="/editar-maquina/:id_maquina" element={<EditarMaquina isAuthenticated={isAuthenticated} />} />
        <Route path="/cadastro-funcionario" element={<CadastroFuncionario isAuthenticated={isAuthenticated} />} />
        <Route path="/insert-user" element={<InsertFuncionario isAuthenticated={isAuthenticated} />} />
        <Route path="/uptade-user" element={<UptadeFuncionario isAuthenticated={isAuthenticated} />} />
      </Routes>
    </div>
  );
}

export default App;
