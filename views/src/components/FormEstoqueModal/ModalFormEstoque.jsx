import React from "react";
import Modal from "react-modal";
import "./ModalFormEstoqueStyle.css";

const ModalFormEstoque = ({
  isOpen,
  onClose,
  bebidasDisponiveis,
  nomeBebidasDisponiveis,
  selectBebida,
  insertEstoque,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
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
            <select
              value={nomeBebidasDisponiveis}
              required
              onChange={selectBebida}
              className="bebidas-disponiveis"
            >
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
      <button onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default ModalFormEstoque;
