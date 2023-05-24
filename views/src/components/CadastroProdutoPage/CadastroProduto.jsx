import React, { useState } from 'react';
import Header from '../Header/Header';
import iconeVoltar from '../util/iconeVoltar.png';
import "react-datepicker/dist/react-datepicker.css";
import './CadastroProdutoStyle.css';
import axios from 'axios';//biblioteca para fazer requisições HTTP em JavaScript
import PopupFormEstoque from './PopupFormEstoque';



function CadastroProduto() {

  const [nome_bebida, setNomeBebida] = useState('');
  const [valor_bebida, setValorBebida] = useState('');
  const [imagem_bebida, setImagemBebida] = useState('');
  const [tipo_bebida, setTipoBebida] = useState('');
   const [exibirPopup, setExibirPopup] = useState(false);


  const createProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/newbebida', {
      nome_bebida,
      tipo_bebida,
      valor_bebida
      // imagemBebida,
    });      

    // Exibe no console o objeto de resposta da requisição
    console.log(response.data);
  }




  return (
    <div>
      <Header />
      <div className="cadastro-produto-wrap">
        <div className="title-cadastro-voltar" href="/home">

          <a href="/home" className="titulo">
            <img src={iconeVoltar} alt="Ícone de voltar" className="title-icon" />
            <span>CADASTRAR PRODUTO</span>
          </a>
        </div>
        <form className="container-cadastro-produto">
          <div className='container-form'>
            <div className='inputs-field-form'>
              <div className='produto-field-form'>
                <div className='label-produto'>
                  <label htmlFor="produto">NOME PRODUTO</label>
                </div>
                <div className='input-produto'>
                  <input type="text"
                    name="produto"
                    placeholder="Informe o Produto:"
                    required
                    onChange={(e) =>
                      setNomeBebida(e.target.value)} />
                </div>
              </div>
              <div className='valor-field-form'>
                <div className='label-valor'>
                  <label htmlFor="valor-label">
                    <span>VALOR</span>
                  </label>
                </div>

                <div className='input-valor'>
                  <input type="number"
                    name="valor"
                    step="0.01"
                    placeholder="Informe o Preço:"
                    required
                    onChange={(e) =>
                      setValorBebida(e.target.value)} />
                </div>

              </div>

              <div className='imagem-field-form'>
                <div className='label-imagem'>
                  <label htmlFor="imagem">IMAGEM</label>

                </div>
                <div className="input-imagem">
                  <label for="arquivo">CARREGAR</label>
                  <input type="file" name="arquivo" id="arquivo"
                    required
                    onChange={(e) =>
                      setImagemBebida(e.target.value)} />
                </div>
              </div>
              <div className='tipo-bebida-field-form'>
                <div className='label-tipoBebida'>
                  <label htmlFor="tipo-bebida">CATEGORIA</label>
                </div>
                <div className='input-bebida'>

                  <select value={tipo_bebida}
                    required
                    onChange={(e) =>
                      setTipoBebida(e.target.value)}>
                    <option value="refrigerante">Refrigerante</option>
                    <option value="agua">Água</option>
                    <option value="suco">Suco</option>
                    <option value="energetico">Bebida Energética</option>
                    <option value="cha">Chá</option>
                    <option value="cafe">Café</option>
                    <option value="alcoolica">Bebida Alcoólica</option>
                  </select>

                </div>
              </div>

            </div>
            <div className='area-button-confirmar'>
              <div className='area-btn-form'>
                <button type="submit"
                  className='confirmar-button'
                  onClick={(e) =>
                    createProduct(e)}>CONFIRMAR</button>
              </div>
              {/* <input type="submit" value="CONFIRMAR" className="confirmar-button" /> */}
            </div>
          </div>
        </form>
        <div className='area-btn-acessar'>
                <button type="button"
                  className='acessar-estoque-button'
                  onClick={() => setExibirPopup(true)}
                  >ACESSAR ESTOQUE</button>
              </div>    
              {exibirPopup && PopupFormEstoque}
      </div>



    </div>


  );
}

export default CadastroProduto;