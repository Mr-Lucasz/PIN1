import React, { useState } from 'react';
import Header from '../Header/Header';
import './RelatorioStyle.css';

function Relatorio() {
  const [periodo, setPeriodo] = useState('');
  const [id_itemestoque, setCampoPreencher] = useState('');
  const [data, setData] = useState('');
  const [ate, setAte] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para processar os valores do formulário
  };

  const [periodoDe, setPeriodoDe] = useState('');
  const [periodoAte, setPeriodoAte] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div>
      <Header />
      <div className='page-relatorio'>
        <div className='titulo-pagina'>
          <a href="/home" className="titulo">
            &#10094; RELATÓRIO
          </a>
        </div>
        <br/>
        <form className='form-relatorio'>

        <br/>
          <div className='id_maquina'>
            <label className='maquina'>ID Máquina:</label>
            <select className='opcao-maquina'>
              <option value="id-maquina">ID DAS MAQUINAS </option>
            </select>
          </div>

          <br/>
          <div className='data'>
            <label htmlFor='data'>Data - de - até:</label>
            
            <br/>
            <input
            className='preencherdata'
              type='date'
              id='data'
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <br/>
            
            <input
              className='preencherdata'
              type='date'
              id='data'
              value={ate}
              onChange={(e) => setAte(e.target.value)}
            />
          </div>

          
          
          <div className='produto'>
            <label htmlFor='Produto'>Produto:</label>
            <br/>
            <input
              className='preencherproduto'
              type='text'
              id='produto'
              value={id_itemestoque}
              onChange={(e) => setCampoPreencher(e.target.value)}
            />
          </div>

          <br/>

          
          <button className='botao-confirmar' type='submit'>Confirmar</button>
         

          <br/>

        </form>
      </div>
    </div>

  );
}

export default Relatorio;