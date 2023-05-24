import './GerenciarMaquinaStyle.css';
import Header from '../Header/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GerenciarMaquina() {
  const [selectmaquinas, setSelectMaquinas] = useState([]);
  // const [id_maquina, setIdMaquina] = useState('');
  const [filtro, setFiltro] = useState('');
  const [statusFiltro, setStatusFiltro] = useState('Todos');

  useEffect(() => {
    const selectMaquinas = async () => {
      try {
        const data = await axios.get('http://localhost:3001/selectmaquina');
        setSelectMaquinas(data.data.data);
      } catch (error) {
        console.error('Erro ao buscar os dados do banco:', error);
      }
    };
    selectMaquinas();
  }, []);

  const filterMaquinas = () => {
    return selectmaquinas.filter((maquina) => {
      const maquinaStatus = maquina.status_maquina.toLowerCase();
      const filtroStatus = statusFiltro.toLowerCase();
      
      if (filtroStatus === 'todos') {
        return maquina.local_maquina.toLowerCase().includes(filtro.toLowerCase());
      } else {
        return (
          maquina.local_maquina.toLowerCase().includes(filtro.toLowerCase()) &&
          maquinaStatus === filtroStatus
        );
      }
    });
  };

  return (
    <div>
      <Header />
      <div className='titulo-pagina'>
        <a href="/home" className="titulo">
          &#10094; GERENCIAMENTO DE MÁQUINAS
        </a>
      </div>
      <br></br>
      <br></br>
      <div className='filtros'>
        <div className='espaco'></div>
        <input
          type='text'
          className='buscar'
          name='buscar'
          placeholder='Buscar'
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          required
        />
        <div className='espaco'></div>
        <select
          className='opcao'
          value={statusFiltro}
          onChange={(e) => setStatusFiltro(e.target.value)}
        >
          <option value='Todos'>Todos</option>
          <option value='Disponivel'>Disponível</option>
          <option value='Operacao'>Operação</option>
          <option value='Manutencao'>Manutenção</option>
          <option value='Inativa'>Inativa</option>
        </select>
        <div className='espacomaior'></div>
        <a href='/adicionar-maquina' className='addmaquina'>
          + ADICIONAR MÁQUINA
        </a>
        <div className='espaco'></div>
      </div>
      <br></br>
      <br></br>
      <div className='tabela-wrapper'>
        <table className='tabelaMaquina'>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Endereço</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {filterMaquinas().map((maquina) => (
              <tr key={maquina.id_maquina}>
                <td>{maquina.id_maquina}</td>
                <td>{maquina.status_maquina}</td>
                <td>{maquina.local_maquina}</td>
                <td>
                  <Link to={`/editar-maquina/${maquina.id_maquina}`}>Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GerenciarMaquina;
