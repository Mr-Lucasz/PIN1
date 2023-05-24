import './GerenciarMaquinaStyle.css';
import React from 'react';
import Header from '../Header/Header';

function GerenciarMaquina() {

  return (
    <div>
      <Header />
      <div className='titulo-pagina'>
        <a href="/home" class="titulo">
          &#10094; GERENCIAMENTO DE MÁQUINAS
        </a>
     
      </div>
      <br></br>
      <br></br>
      <div className='filtros'>
        {/* espaco */}
        <div className='espaco'></div>
        {/* busca */} 
        <input type='text' className='buscar' name='buscar' placeholder='BUSCAR' required></input>
        {/* espaco */}
        <div className='espaco'></div>
        {/* campo de selecao */}
        <select className='opcao'>
          <option value="Todos">Todos</option>
          <option value="Disponivel">Disponível</option>
          <option value="Operacao">Operação</option>
          <option value="Manutencao">Manutenção</option>
          <option value="Inativa">Inativa</option>
        </select>

        {/* espaco */}
        <div className='espacomaior'></div>
        {/* adcionar maquina */}
        <a href="/adicionar-maquina" className="addmaquina">
          ADICIONAR MÁQUINA
        </a>
        {/* espaco */}
        <div className='espaco'></div>   
      </div>
    </div>
  );
}

export default GerenciarMaquina;
