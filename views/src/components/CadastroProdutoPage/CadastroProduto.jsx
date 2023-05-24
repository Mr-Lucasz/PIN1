import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import iconeVoltar from "../util/iconeVoltar.png";
import "react-datepicker/dist/react-datepicker.css";
import "./CadastroProdutoStyle.css";
import axios from "axios"; //biblioteca para fazer requisições HTTP em JavaScript
import Modal from "react-modal";

function CadastroProduto() {
  const [id_bebida, setIdBebida] = useState("");
  const [nome_bebida, setNomeBebida] = useState("");
  const [valor_bebida, setValorBebida] = useState("");
  const [imagem_bebida, setImagemBebida] = useState("");
  const [tipo_bebida, setTipoBebida] = useState("");

  const [bebidasDisponiveis, setBebidasDisponiveis] = useState([]);
  const [nomeBebidasDisponiveis, setNomeBebidasDisponiveis] = useState([]);
  const [exibirModal, setExibirModal] = useState(false);
  const [selectedBebida, setSelectedBebida] = useState("");


  const createProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/newbebida", {
      nome_bebida,
      tipo_bebida,
      valor_bebida,
      // imagemBebida,
    });

    // Exibe no console o objeto de resposta da requisição
    console.log(response.data);
  };

  useEffect(() => {
    const selectBebidasDisponiveis = async () => {
      try {
        const response = await axios.get("http://localhost:3001/selectbebida");
        setBebidasDisponiveis(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    selectBebidasDisponiveis();
  }, []);



  const insertEstoque = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/newestoque", {
      id_bebida: id_bebida // Envia o id_bebida como parâmetro
    });
  
    // Exibe no console o objeto de resposta da requisição
    console.log(response.data);
    setIdBebida("");
    setNomeBebidasDisponiveis("");
  };
const selectBebida = (e) => {
  const selectedBebida = bebidasDisponiveis.find((bebida) => bebida.nome_bebida === e.target.value);
  setIdBebida(selectedBebida.id_bebida);
  setNomeBebidasDisponiveis(e.target.value);
};

  return (
    <div>
      <Header />
      <div className="cadastro-produto-wrap">
        <div className="title-cadastro-voltar" href="/home">
          <a href="/home" className="titulo">
            <img
              src={iconeVoltar}
              alt="Ícone de voltar"
              className="title-icon"
            />
            <span>CADASTRAR PRODUTO</span>
          </a>
        </div>
        <form className="container-cadastro-produto">
          <div className="container-form">
            <div className="inputs-field-form">
              <div className="produto-field-form">
                <div className="label-produto">
                  <label htmlFor="produto">NOME PRODUTO</label>
                </div>
                <div className="input-produto">
                  <input
                    type="text"
                    name="produto"
                    placeholder="Informe o Produto:"
                    required
                    onChange={(e) => setNomeBebida(e.target.value)}
                  />
                </div>
              </div>
              <div className="valor-field-form">
                <div className="label-valor">
                  <label htmlFor="valor-label">
                    <span>VALOR</span>
                  </label>
                </div>

                <div className="input-valor">
                  <input
                    type="number"
                    name="valor"
                    step="0.01"
                    placeholder="Informe o Preço:"
                    required
                    onChange={(e) => setValorBebida(e.target.value)}
                  />
                </div>
              </div>

              <div className="imagem-field-form">
                <div className="label-imagem">
                  <label htmlFor="imagem">IMAGEM</label>
                </div>
                <div className="input-imagem">
                  <label for="arquivo">CARREGAR</label>
                  <input
                    type="file"
                    name="arquivo"
                    id="arquivo"
                    required
                    onChange={(e) => setImagemBebida(e.target.value)}
                  />
                </div>
              </div>
              <div className="tipo-bebida-field-form">
                <div className="label-tipoBebida">
                  <label htmlFor="tipo-bebida">CATEGORIA</label>
                </div>
                <div className="input-bebida">
                  <select
                    value={tipo_bebida}
                    required
                    onChange={(e) => setTipoBebida(e.target.value)}
                  >
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
            <div className="area-button-confirmar">
              <div className="area-btn-form">
                <button
                  type="submit"
                  className="confirmar-button"
                  onClick={(e) => createProduct(e)}
                >
                  CONFIRMAR
                </button>
              </div>
              {/* <input type="submit" value="CONFIRMAR" className="confirmar-button" /> */}
            </div>
          </div>
        </form>
        <div className="area-btn-acessar">
          <button
            onClick={() => setExibirModal(true)}
            className="acessar-estoque-button"
          >
            ACESSAR ESTOQUE
          </button>
          <Modal
            isOpen={exibirModal}
            onRequestClose={() => setExibirModal(false)}
            contentLabel="Exemplo de Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
            ariaHideApp={false}
          >
            <form className="form-modal">
              <h2>ESTOQUE</h2>
              <div className="escolher-bebida">
                <label htmlFor="bebidas-disponiveis">Bebidas Disponíveis</label>
                <div className="input-bebidas-disponiveis">
                <select value={nomeBebidasDisponiveis}
                    required
                    onChange={selectBebida} // Alterado para chamar a função selectBebida
                  className="bebidas-disponiveis" >
                  <option value="">Selecione uma bebida</option>
                  {bebidasDisponiveis.map((Bebida) => (
                    <option key={Bebida.id} value={Bebida.id}>
                      {Bebida.nome_bebida}
                    </option>
                  ))}
                </select>
                </div>
              </div>
              <button onClick={insertEstoque}>INSERIR NO ESTOQUE</button>
            </form>

            <button onClick={() => setExibirModal(false)}>Fechar</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CadastroProduto;
