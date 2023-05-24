import React from "react";
import Header from "../Header/Header";
import "./CadastroFuncionarioStyle.css";
import iconeVoltar from "../util/iconeVoltar.png";
import refriImage from "../util/refriCadastroUser.png";
import { useNavigate } from "react-router-dom";

function CadastroFuncionario() {
  const navigate = useNavigate();

  const alterarUser = async (e) => {
    e.preventDefault();
    navigate("/alterar-usuario");
  };
  const insertUser = async (e) => {
    e.preventDefault();
    navigate("/insert-user");
  };

  return (
    <div>
      <Header />
      <div className="wrap-cadastro-funcionario">
        <div className="title-usuario-voltar" href="/admin-home">
          <a href="/admin-home" className="titulo-home-voltar">
            <img
              src={iconeVoltar}
              alt="Ícone de voltar"
              className="title-icon"
            />
            <span>GERENCIAMENTO DE USUÁRIOS</span>
          </a>
        </div>
        <div className="area-btn-img">
          <div className="img-refri-home">
            <img src={refriImage} alt="Refri" />
          </div>
          <div className="area-buttons-usuario">
            <button className="alterar-button" onClick={(e) => alterarUser(e)}>
              ALTERAR USUÁRIOS
            </button>

            <button className="insert-button" onClick={(e) => insertUser(e)}>
              INCLUIR NOVO USUÁRIO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroFuncionario;
