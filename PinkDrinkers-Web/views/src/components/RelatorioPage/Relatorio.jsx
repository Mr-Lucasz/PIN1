import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './RelatorioStyle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Relatorio() {
  const [tipo, settotem] = useState('');
  const [selecttotem, setSelectTotem] = useState([]);
  const [dataIni, setDataIni] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [selectRelatorio, setSelectRelatorio] = useState([]);

  const [resultadoTabel, setTable] = useState([]);
  const [tipotable, setTabletipo] = useState([]);


  const pesquisaRelatorio = async (e) => {
    e.preventDefault();
    const { data, error } = await axios.post('http://localhost:3001/pesquisarelatorio', {
      tipo,
      dataIni,
      dataFim
    }).then((data) => {
      console.log(data.data.data);
      if (Array.isArray(data.data.data)) {
        setTable(data.data.data);
        setTabletipo(data.data.valor);
      } else {
        setTable([]);
      }
    });

  }




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
            <label className='maquina'>Tipo Relatorio:</label>
            <select
              className='opcao-maquina'
              value={tipo}
              required
              onChange={(e) => settotem(e.target.value)}
            >
              <option value="">Selecione o Tipo</option>
              <option value="1">Bebidas</option>
              <option value="2">Reposições</option>
              <option value="3">Maquinas</option>
              <option value="4">Venda</option>
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
          {resultadoTabel.length > 0 ? (
            <table className="tabela">
              <thead>
                <tr>
                  {tipotable === 1 && (
                    <>
                      <th>Bebida</th>
                      <th>Tipo</th>
                      <th>Valor</th>
                    </>
                  )}
                  {tipotable === 2 && (
                    <>
                      <th>Bebida</th>
                      <th>Status</th>
                      <th>Observação</th>
                      <th>Data</th>
                    </>
                  )}
                  {tipotable === 3 && (
                    <>
                      <th>Local</th>
                      <th>Status</th>
                    </>
                  )}
                  {tipotable === 4 && (
                    <>
                      <th>Totem</th>
                      <th>Bebida</th>
                      <th>Valor</th>
                      <th>Data</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {resultadoTabel.map((item) => (
                  <tr key={item.valor}>
                    {tipotable === 1 && (
                      <>
                        <td>{item.Bebida.nome_bebida}</td>
                        <td>{item.Bebida.tipo_bebida}</td>
                        <td>{item.Bebida.valor_bebida}</td>
                      </>
                    )}
                    {tipotable === 2 && (
                      <>
                        <td>{item.Item_estoque.Bebida.nome_bebida}</td>
                        <td>{item.status_reposicao}</td>
                        <td>{item.observacao_reposicao}</td>
                        <td>{item.data_reposicao}</td>
                      </>
                    )}
                    {tipotable === 3 && (
                      <>
                        <td>{item.local_maquina}</td>
                        <td>{item.status_maquina}</td>
                      </>
                    )}
                    {tipotable === 4 && (
                      <>
                        <td>{item.Totem.nome_totem}</td>
                        <td>{item.item_totem.Bebida.nome_bebida}</td>
                        <td>{item.valor_venda}</td>
                        <td>{item.data_venda}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>


      </div>
    </div>
  );
}

export default Relatorio;
