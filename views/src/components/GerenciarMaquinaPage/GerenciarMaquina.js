import './GerenciarMaquinaStyle.css';
import React from 'react';
import Header from '../Header/Header';


function GerenciarMaquina() {


  return (
    <div className="home-wrap">
      <Header />
      <div className='titulo-pagina'>
        <a href="/home" class="titulo">
          &#10094; GERENCIAMENTO DE MÁQUINAS
        </a>

      </div>
      <br />
      <div className='filtros'>
        {/* espaco */}
        <div className='espaco'></div>
        {/* primeiro campo de selecao */}
          <select className='opcao'>
            <option value="em-andamento">EM ANDAMENTO </option>
            <option value="laranja">Laranja</option>
            <option value="banana">Banana</option>
            <option value="uva">Uva</option>
          </select>
          {/* espaco */}
          <div className='espaco'></div>
          {/* segundo campo de filtro */}
          <input type='text' className='buscar' name='buscar' placeholder='BUSCAR' required></input>
          {/* espaco */}
          <div className='espaco'></div>
          {/* filtros */}
          <select className='opcao'>
            <option value="em-andamento">EM ANDAMENTO </option>
            <option value="laranja">Laranja</option>
            <option value="banana">Banana</option>
            <option value="uva">Uva</option>
          </select>
          {/* espaco */}
          <div className='espaco'></div>
          {/* adcionar maquina */}
          <a href="/cadastro-produto" className="addmaquina">
           ADD MÁQUINA
          </a>
          {/* espaco */}
          <div className='espaco'></div>
      </div>
    </div>
  );
}

export default GerenciarMaquina;
