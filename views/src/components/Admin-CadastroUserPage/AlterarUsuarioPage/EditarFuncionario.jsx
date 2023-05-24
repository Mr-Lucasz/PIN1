import React from "react";
import Header from "../../Header/Header";
import "./EditarFuncionarioStyle.css";
import iconeVoltar from "../../util/iconeVoltar.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"; //biblioteca para fazer requisições HTTP em JavaScript




function EditarFuncionario() {
    const [idFuncionario, setIdFuncionario] = useState("");
    const [nome, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassoword] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erro, setErro] = useState(null); // Estado para armazenar a mensagem de erro

    
     
    
    const editarFuncionario = async (e) => {

      
        try {
          const response = await axios.post("http://localhost:3001/updatefuncionario", {
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
    

     
    const listarFuncionarioById = async (e) => {
    try {
      const response = await axios.post("http://localhost:3001//selectbyfuncionario/:id", {
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
  
        </div>
      </label>
            
        

      </div>
    
        <div className="area-btn-form-func">
                <button
                  type="submit"
                  className="confirmar-button-usuario"
                  onClick={(e) => editarFuncionario(e)}
                > CONFIRMAR </button>
              </div>
              <p className="error-message">{erro}</p>
        </form>
      </div>
    </div>
  );
}

export default EditarFuncionario;
