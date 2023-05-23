import './AdicionarMaquinaStyle.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';//biblioteca para fazer requisições HTTP em JavaScript

function AdicionarMaquina() {

  const[status_maquina, setStatusMaquina] = useState('');
  const[local_maquina, setLocalMaquina] = useState('');

    const adicionarMaquina = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/newmaquina', {
      status_maquina,
      local_maquina
    }); 
    // console.log("teste");
    // console.log(status_maquina);
    // console.log(local_maquina);
  }


  return (
    <div>
      <Header />
      <div className='titulo-pagina'>
        <a href="/gerenciar-maquina" class="titulo">
          &#10094; ADICIONAR MÁQUINAS
        </a>
      </div>
      <div>

        <form className='cadastroMaquina-form'>
          <label className='campos_maquina' for="id_maquina">ID da Máquina:</label>
          <input className='id_maquina' type="number" disabled />

          <br></br>

          <label className='campos_maquina'>Status da Máquina:</label>

          <select className='status_maquina' required
          onChange={(e) => setStatusMaquina(e.target.value)}>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
            <option value="Manutencao">Manutenção</option>
          </select>

          <br></br>

          <label className='campos_maquina'>Local da Máquina:</label>
          <input className='local_maquina' type="text" required 
          onChange={(e) => setLocalMaquina(e.target.value)}/>

          <br></br>

          {/* <label for="imagem_maquina">Imagem da Máquina:</label>
          <input type="file" id="imagem_maquina" name="imagem_maquina" accept="image/*"/>
           */}

          <button href="/home" className="cadastrarmaquina" 
          onClick={(e) => adicionarMaquina(e)} >Cadastrar</button>

        </form>
      </div>
    </div>
  );
}

export default AdicionarMaquina;
