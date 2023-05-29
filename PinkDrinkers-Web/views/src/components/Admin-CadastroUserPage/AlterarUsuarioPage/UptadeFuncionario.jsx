import React from "react";
import Header from "../../Header/Header";
import iconeVoltar from "../../util/iconeVoltar.png";
import "./UpdateFuncionarioStyle.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function UptadeFuncionario() {
  const [funcionario, setFuncionario] = useState([]);
  const navigate = useNavigate();

  const [idFuncionario, setIdFuncionario] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  
  const uptadeUser = async (e, id) => {
    navigate('/uptade-user');
    e.preventDefault();
  };

  useEffect(() => {
    const consultarById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/selectbyidreposicao/${idFuncionario}`);
        const { data } = response;
        setName(data.name);
        setEmail(data.email);
        setPassoword(data.password);
      } catch (error) {
        console.error('Erro ao buscar os dados do banco:', error);
      }
    };
    consultarById();
  }, [idFuncionario]);
 
 
  

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
        <div className="title-uptade-voltar" href="/uptade-user">
          <a href="/uptade-user" className="titulo-uptade-voltar">
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
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {funcionario.length > 0 ? (
              funcionario.map((funcionario) => (
                <tr key={funcionario.id}>
                  <td>{funcionario.name}</td>
                  <td>{funcionario.email}</td>
                  <td>
                    <button
                      onClick={(e) => uptadeUser(e, funcionario.id)}
                      className="editar-button"
                    >
                      Editar
                    </button>
                  </td>
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