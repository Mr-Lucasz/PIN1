import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './RelatorioStyle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Relatorio() {
  const [id_totem, settotem] = useState('');
  const [selecttotem, setSelectTotem] = useState([]);
  const [dataIni, setDataIni] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [selectRelatorio, setSelectRelatorio] = useState([]);

  const [resultadoTabel, setTable] = useState([]);

  const pesquisaRelatorio = async (e) => {
    e.preventDefault();
    const { data, error } = await axios.post('http://localhost:3001/pesquisarelatorio', {
      id_totem,
      dataIni,
      dataFim
    }).then((data) =>{ console.log(data.data.data) ;
      if (Array.isArray(data.data.data)) {
      setTable(data.data.data);
    } else {
      setTable([]);
    } });

   
    
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
        const { data } = await axios.get('http://localhost:3001/selecttotem');
        setSelectTotem(data.data);
      } catch (error) {
        console.error('Erro ao buscar os dados do banco:', error);
      }
    };
    selectTotem();
  }, []);

  useEffect(() => {
    const selectRelatorio = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/pesquisarelatorio');
        setSelectTotem(data.data);
      } catch (error) {
        console.error('Erro ao buscar os dados do banco:', error);
      }
    };
    selectRelatorio();
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

          <br />
          <div className='id_maquina'>
            <label className='maquina'>Totem:</label>
            <select
              className='opcao-maquina'
              value={id_totem}
              required
              onChange={(e) => settotem(e.target.value)}
            >
              <option value="">Selecione um Totem</option>
              {selecttotem.map((totem) => (
                <option key={totem.id_totem} value={totem.id_totem}>{totem.nome_totem}</option>
              ))}
            </select>
          </div>

          <br />
          <div className='data'>
            <label htmlFor='data'>Data</label>

            <br />
            <input
              className='preencherdata'
              type='date'
              id='data'
              value={dataIni}
              onChange={(e) => setDataIni(e.target.value)}
            />
            <br />
            <label htmlFor='data'>Até</label>
            <br />
            <input
              className='preencherdata'
              type='date'
              id='data'
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
            />
          </div>

          <br />
          
          <button className='botao-confirmar' type='submit' onClick={pesquisaRelatorio}>
            Confirmar
          </button>
          
          <br />

        </form>
        <div className="resultado-tabela">
          <h2>Resultado da Consulta</h2>
          <ul>
            
            {resultadoTabel.map((item) => (
              <>

              <li key={item.id_venda}>{item.Totem.nome_totem}</li>
              <li key={item.id_venda}>{item.id_venda}</li>
             
              <li key={item.id_venda}>{item.data_venda}</li>
             
              
              <br></br>
              </>
              
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Relatorio;
