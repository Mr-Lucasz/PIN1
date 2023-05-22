import React, { useState } from 'react';
import Header from '../Header/Header';
import iconeVoltar from '../util/iconeVoltar.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CadastroProdutoStyle.css';



function CadastroProduto() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("opcao1");
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
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
                    required />
                </div>
              </div>
              <div className='valor-field-form'>
                <div className='label-valor'>
                  <label htmlFor="valor-label">
                    <span>VALOR</span>
                  </label>
                </div>

                <div className='input-valor'>
                  <input type="text"
                    name="valor"
                    placeholder="Informe o Preço:"
                    required />
                </div>

              </div>

              <div className='imagem-field-form'>
                <div className='label-imagem'>
                  <label htmlFor="imagem">IMAGEM</label>

                </div>
                <div className="input-imagem">
                  <label for="arquivo">CARREGAR</label>
                  <input type="file" name="arquivo" id="arquivo" />
                </div>

              </div>


              <div className='tipo-bebida-field-form'>
                <div className='label-tipoBebida'>
                  <label htmlFor="tipo-bebida">CATEGORIA</label>
                </div>
                <div className='input-bebida'>
                  <select value={selectedOption} onChange={handleSelectChange} required>
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

              <input type="submit" value="CONFIRMAR" className="confirmar-button" />
            </div>
          </div>
        </form>

      </div>



    </div>


  );
}

export default CadastroProduto;