import React, { useState, useEffect  } from 'react';
import Header from '../Header/Header';
import iconeVoltar from '../util/iconeVoltar.png';
import './EditarMaquinaStyle.css';
import axios from 'axios';//biblioteca para fazer requisições HTTP em JavaScript
import  {redirect, useParams } from 'react-router-dom';


function EditarMaquina() {
// pega id passado
    const { id_maquina } = useParams();
//pega valores para salvar no banco
  const [status_maquina, setStatus] = useState('');
  const [local_maquina, setEndereco] = useState('');

  const EditarMaquina = async (e) => {
    e.preventDefault();
    const {data, error} = await axios.post('http://localhost:3001/updatemaquina', {
      id_maquina,
      status_maquina,
      local_maquina
    });
    console.log(error);
    if(error === 'undefined'){
        return "/gerenciar-maquina";
    }
    console.log(data);    
  }

  useEffect(() => {

    const consultarbyid = async () => {
        try {
          const data = await axios.get('http://localhost:3001/selectbyidmaquina/'+id_maquina);
        
         
         setStatus(data.data.data[0].status_maquina);
         setEndereco(data.data.data[0].local_maquina);

        // Atualiza o estado com os dados obtidos do banco
        } catch (error) {
          console.error('Erro ao buscar os dados do banco:', error);
        }
      };

    consultarbyid();

  }, []);


  return (
    <div>
      
      <Header />
      <div className="cadastro-produto-wrap">
        <div className="title-cadastro-voltar" href="/home">

          <a href="/gerenciar-maquina" className="titulo">
            {/* <img src={iconeVoltar} alt="Ícone de voltar" className="title-icon" /> */}
            <span> &#10094;  EDITAR MAQUINA</span>
            
          </a>
        </div>
        
        <form className="cadastroreposicao-form">
          <div className='container-form'>
            <div className='inputs-field-form'>
              <br></br><br></br><br></br> <br></br><br></br>

              <div className='categoria-field-form'>
                <div className='label-categoria'>
                  <label className="labelform" htmlFor="categoria">Status Maquina</label>
                </div>
                <div className='input-categoria'>
                  <select  className="selectbebida" value={status_maquina}
                    required
                    onChange={(e) =>
                      setStatus(e.target.value)}>
                    <option value='Disponivel'>Disponível</option>
                    <option value='Operacao'>Operação</option>
                    <option value='Manutencao'>Manutenção</option>
                    <option value='Inativa'>Inativa</option>
                    
                  </select>
                </div>
              </div>

              <div className='produto-field-form'>
                <div className='label-produto'>
                  <label className="labelform" htmlFor="produto">Endereço:</label>
                </div>
                <div className='input-produto'>
                  <input className="inputbebida" value={local_maquina} required
                    onChange={(e) =>
                      setEndereco(e.target.value)} />
                </div>
              </div>
              </div>
              <div className='area-button-confirmar'>

                <input type="submit" value="CONFIRMAR" className="cadastrar"  onClick={(e) =>
                      EditarMaquina(e)}/>
              </div>
              
          </div>
           
        </form>

      </div>



    </div>


  );
}

export default EditarMaquina;