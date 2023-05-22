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
          <div className='produto-field-form'>
            <div className='label-produto'>
              <label htmlFor="produto">PRODUTO</label>
            </div>

            <input type="text"
              name="produto"
              placeholder="Informe o Produto:"
              required />
          </div>

          <div className='data-validade-field-form'>
            <div className='label-data-validade'>
              <label htmlFor="data-validade">DATA DE VALIDADE</label>
            </div>

            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              showDayMonthYearPicker
              dateFormat="dd/MM/yyyy" />
          </div>
          
          <div className='imagem-field-form'>
            <div className='label-imagem'>
              <label htmlFor="imagem">IMAGEM</label>

            </div>
            <div className='input-imagem'>
            </div>
            <input type="file" accept="image/*" required />
          </div>

          <div className='categoria-field-form'>
            <div className='label-categoria'>
              <label htmlFor="categoria">CATEGORIA</label>
            </div>
            <div className='input-categoria'>
              <select value={selectedOption} onChange={handleSelectChange} required>
                <option value="opcao1">Categoria 1</option>
                <option value="opcao2">Categoria 2</option>
                <option value="opcao3">Categoria 3</option>
              </select>
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