import './AdicionarMaquinaStyle.css';
import React from 'react';
import Header from '../Header/Header';


function AdicionarMaquina() {


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
    </form>
      </div>
    </div>
  );
}

export default AdicionarMaquina;
