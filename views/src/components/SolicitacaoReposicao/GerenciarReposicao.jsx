import '../GerenciarMaquinaPage/GerenciarMaquinaStyle.css';
import './GerenciarReposicaoStyle.css';
import axios from 'axios';//biblioteca para fazer requisições HTTP em JavaScript
import React, { useState, useEffect  } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function GerenciarReposicao() {
    const [listaReposicao, setListaReposicao] = useState([]);
    useEffect(() => {

        const listaReposicao = async () => {
          try {
            const data = await axios.get('http://localhost:3001/listareposicao');
            
            setListaReposicao(data.data.data); // Atualiza o estado com os dados obtidos do banco
          } catch (error) {
            console.error('Erro ao buscar os dados do banco:', error);
          }
        };
    
        listaReposicao();
    
      }, []);

  return (
    <div>
      <Header />
      <div className='titulo-pagina'>
        <a href="/home" class="titulo">
          &#10094; GERENCIAMENTO DE REPOSIÇÕES
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
          <option value="EM ESPERA">Em Espera</option>
          <option value="EM ANDAMENTO">Em Andamento</option>
          <option value="REALIZADO">Realizado</option>
        </select>

        {/* espaco */}
        <div className='espacomaior'></div>
        {/* adcionar maquina */}
        <a href="/solicitacao_reposicao" className="addmaquina">
          ADICIONAR REPOSIÇÃO
        </a>
        {/* espaco */}
        <div className='espaco'></div>   
      </div><br></br>
      <div className='listareposicao'>
      <table className="tabela">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Totem</th>
                    <th>Bebida</th>
                    <th>Status</th>
                    <th>Data</th>
                    <th>Editar</th>

                </tr>
            </thead>
            <tbody>
                
            {listaReposicao.map((reposicao) => (
                    <>
                    <tr key={reposicao.id_reposicao}>
                    <td>{reposicao.id_reposicao}</td>
                    <td>{reposicao.Totem.nome_totem}</td>
                    <td>{reposicao.Item_estoque.Bebida.nome_bebida}</td>
                    <td>{reposicao.status_reposicao}</td>
                    <td>{reposicao.data_reposicao}</td>
                    <td className="editar"><Link to={`/editar_reposicao/${reposicao.id_reposicao}`}>Editar</Link></td>
                    
                    
                    </tr>
                    </>
                
                
                ))}
                
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default GerenciarReposicao;
