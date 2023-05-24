import React from "react";
import Header from "../../Header/Header";
import "./insertFuncStyle.css";
import iconeVoltar from "../../util/iconeVoltar.png";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"; //biblioteca para fazer requisições HTTP em JavaScript



function InsertFuncionario() {
    const [nome, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassoword] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erro, setErro] = useState(null); // Estado para armazenar a mensagem de erro




  const insertUser = async (e) => {
    e.preventDefault();
    
    
    try {
      const response = await axios.post("http://localhost:3001/newfuncionario", {
        nome,
        email,
        password
      });
      console.log(response.data);
      setErro(null);
    } catch (error) {
      setErro(error.response.data.message); // Define a mensagem de erro recebida do backend
    }
    
  };

  return (
    <div>
      <Header />
      <div className="wrap-insert-funcionario">
        <div className="title-insert-voltar" href="/cadastro-funcionario">
          <a href="/cadastro-funcionario" className="title-insert-voltar">
            <img
              src={iconeVoltar}
              alt="Ícone de voltar"
              className="title-icon"
            />
            <span>CADASTRO NOVO USUÁRIO</span>
          </a>
        </div>
        <form className="form-insert-funcionario">
        
            <div className="area-inputs-insert-funcionario">

        <label>Informe seu nome:
        <input
         type="name" 
         value={nome}
         placeholder="Informe seu nome"
         onChange={(e) => setName(e.target.value)}/>
      </label>
        <label>Informe seu email:
        <input
           type="email" 
           placeholder="Informe seu E-mail"
           className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </label>
       
        <label>Informe sua senha:
        <div className="password-input">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Informe sua senha"
            value={password}
            onChange={(e) => setPassoword(e.target.value)}
          />
         <FontAwesomeIcon
            icon={mostrarSenha ? faEyeSlash : faEye}
            className="password-icon"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          />
        </div>
      </label>
            
        

      </div>
    
        <div className="area-btn-form-func">
                <button
                  type="submit"
                  className="confirmar-button-usuario"
                  onClick={(e) => insertUser(e)}
                > CONFIRMAR </button>
              </div>
              <p className="error-message">{erro}</p>
        </form>
      </div>
    </div>
  );
}

export default InsertFuncionario;
