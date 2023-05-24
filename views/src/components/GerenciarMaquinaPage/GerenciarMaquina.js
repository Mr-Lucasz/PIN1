import './GerenciarMaquinaStyle.css';
// import React from 'react';
import Header from '../Header/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { selectMaquina } from '../../../../server/src/model/Maquina';

function GerenciarMaquina() {

  const [selectmaquinas, setSelectMaquinas] = useState([]);
  const [id_maquina, setIdMaquina] = useState('');

  useEffect(() => {
    const selectMaquinas = async () => {
      try {
        const data = await axios.get('http://localhost:3001/selectmaquina');

        setSelectMaquinas(data.data.data); // Atualiza o estado com os dados obtidos do banco
      } catch (error) {
        console.error('Erro ao buscar os dados do banco:', error);
      }
    };
    selectMaquinas();
  }, []);

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

      <br></br>
      <br></br>
      <div class="tabela-wrapper">
        <table className="tabelaMaquina">
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>

            {selectmaquinas.map((maquina) => (
              <tr>
                <td>{maquina.id_maquina}</td>
                <td>{maquina.status_maquina}</td>
                <td>{maquina.local_maquina}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GerenciarMaquina;
