import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './RelatorioStyle.css';
import axios from 'axios';//biblioteca para fazer requisições HTTP em JavaScript
import { Link } from 'react-router-dom';

function Relatorio() {
  const [id_totem, settotem] = useState('');
  const [selecttotem, setSelectTotem] = useState([]);
  const [dataIni, setDataIni] = useState('');
  const [dataFim, setDataFim] = useState('');

  const [resultadoTabel, setTable] = useState([]);

  const pesquisaRelatorio = async (e) => {
    e.preventDefault();
    const {data, error} = await axios.post('http://localhost:3001/pesquisarelatorio', {
      id_totem,
      dataIni,
      dataFim
    });

    setTable(data);   
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para processar os valores do formulário
  };

  const [periodoDe, setPeriodoDe] = useState('');
  const [periodoAte, setPeriodoAte] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {

    const selectTotem = async () => {
      try {
        const data = await axios.get('http://localhost:3001/selecttotem');
        
        setSelectTotem(data.data.data); 
      } catch (error) {
        console.error('Erro ao buscar os dados do banco:', error);
      }
    };
    selectTotem();

  }, []);

  return (
    <div>
      <Header />
      <div className='page-relatorio'>
        <div className='titulo-pagina'>
          <a href="/home" className="titulo">
              &#10094; RELATÓRIO
          </a>
        </div>
        
        <form className='form-relatorio'>

        <br/>
          <div className='id_maquina'>
            <label className='maquina'>Totem:</label>
            <select className='opcao-maquina'
             value={id_totem}
             required
             onChange={(e) =>
              settotem(e.target.value)}>
            <option value="">Selecione um Totem</option>
            {selecttotem.map((totem) => (
            <option key={totem.id_totem} value={totem.id_totem}>{totem.nome_totem}</option>
            ))}
            </select>
          </div>

          <br/>
          <div className='data'>
            <label htmlFor='data'>Data</label>
            
            <br/>
            <input
            className='preencherdata'
              type='date'
              id='data'
              value={dataIni}
              onChange={(e) => setDataIni(e.target.value)}
            />
            <br/>
            <label htmlFor='data'>Até</label>
            <br/>
            <input
              className='preencherdata'
              type='date'
              id='data'
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
            />
          </div>

          

          <br/>

          
          <button className='botao-confirmar' type='submit'  onClick={(e) => pesquisaRelatorio(e)}>Confirmar</button>
         

          <br/>

        </form>

        <div className="tablediv">
        
       
    <table>
      <thead>
        <tr>
          <th>ID</th>
          {/* Outras colunas da tabela */}
        </tr>
      </thead>
      <tbody>
        {console.log(resultadoTabel) }
          <tr >
            <td></td>
            {/* Renderizar outras colunas da tabela */}
          </tr>
        
      </tbody>
    </table>
 
  
        </div>
      </div>
    </div>

  );
}

export default Relatorio;