import React from "react";
import Header from "../../Header/Header";
import iconeVoltar from "../../util/iconeVoltar.png";
import "./UpdateFuncionarioStyle.css";
import axios from "axios"; //biblioteca para fazer requisições HTTP em JavaScript
import { useState } from "react"; 
import { useEffect } from "react";

function UptadeFuncionario() {

  const [funcionario, setFuncionario] = useState([]);

  const uptadeUser = async (e) => {
    e.preventDefault();
  };



  useEffect(() => {
    const selectFuncionarios = async () => {
      try {
        const response = await axios.get("http://localhost:3001/selectfuncionario");
        setFuncionario(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    selectFuncionarios();
  }, []);

  return (
    <div>
      <Header />
      <div className="wrap-uptade-funcionario">
        <div className="title-uptade-voltar" href="/cadastro-funcionario">
          <a href="/cadastro-funcionario" className="titulo-uptade-voltar">
            <img
              src={iconeVoltar}
              alt="Ícone de voltar"
              className="title-icon"
            />
            <span>ALTERAR USUÁRIOS</span>
          </a>
        </div>
        <table className="user-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Senha</th>
        </tr>
      </thead>
      <tbody>
        {funcionario.length > 0 ? (
          funcionario.map((funcionario) => (
            <tr key={funcionario.id}>
              <td>{funcionario.nome}</td>
              <td>{funcionario.email}</td>
              <td>{funcionario.password}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">Nenhum usuário encontrado.</td>
          </tr>
        )}
      </tbody>
    </table>
      </div>
    </div>
  );
}

export default UptadeFuncionario;
