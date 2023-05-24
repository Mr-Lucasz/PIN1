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

      <div className='titulo-pagina'>
        <a href="/home" className="titulo">
          &#10094; RELATÓRIO
        </a>
      </div>
      <br />
      <div>
        <form classname='form-relatorio'>
          <div className='id_maquina'>
            <label className='maquina'>ID Máquina:</label><br />
            <select className='opcao-maquina'>
              <option value="id-maquina">ID DAS MAQUINAS </option>
            </select>
          </div>

          <div>
            <div className='periodo'>
              <label htmlFor='periodo'> Período:</label><br />
              <input
                type='text'
                id='periodo'
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
              />

            </div>

            <div className='produto'>
              <label htmlFor='Produto'>Produto:</label><br />
              <input
                type='text'
                id='produto'
                value={id_itemestoque}
                onChange={(e) => setCampoPreencher(e.target.value)}
              />
            </div>

            <div className='data'>
              <label htmlFor='data'>Data:</label><br />
              <input
                type='date'
                id='data'
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <label htmlFor='data'>Até:</label>
              <input
                type='date'
                id='data'
                value={ate}
                onChange={(e) => setAte(e.target.value)}
              />
            </div>
            <div className='botao-confirmar'>
              <button type='submit'>Confirmar</button>
            </div>
          </div>

        </form>
      </div>
    </div>

  );
}

export default Relatorio;