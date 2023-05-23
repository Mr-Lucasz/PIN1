import './AdicionarMaquinaStyle.css';
import React from 'react';
import Header from '../Header/Header';


function AdicionarMaquina() {

  // const adicionarMaquina = async (e) => {
  //   e.preventDefault();



  // }

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
          <select className='status_maquina' required>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="manutencao">Manutenção</option>
          </select>

          <br></br>

          <label className='campos_maquina'>Local da Máquina:</label>
          <input className='local_maquina' type="text" required />

          <br></br>

          {/* <label for="imagem_maquina">Imagem da Máquina:</label>
          <input type="file" id="imagem_maquina" name="imagem_maquina" accept="image/*"/>
           */}

          {/* <a href="/home" className="cadastrarmaquina" onClick={(e) => adicionarMaquina(e)} >Cadastrar</a> */}

        </form>

      </div>
    </div>
  );
}

export default AdicionarMaquina;
