import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./ModalCart.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BoxImagem } from "./BoxImg";
import Button from "../Buttons";
import { TextCart } from "./TextCart";

export function ModalCart({
  isOpen,
  onClose,
  productImage,
  productName,
  productPrice,
}) {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Exemplo de Modal"
      overlayClassName={styles["modal-overlay"]}
      className={styles["modal-content"]}
      ariaHideApp={false}
    >
      <form className={styles.modalForm}>
        <header>
          <h2 className={styles.titleModal}>
            <IoIosArrowBack className={styles["back-icon"]} onClick={onClose} />
            ADICIONAR CARRINHO
          </h2>
        </header>
        <main>
          <BoxImagem
            imagemSrc={productImage}
            tamanho="medium"
            backgroundColor="rgba(237, 55, 68, 0.10"
          />
          <div className={styles["product-info"]}>
            <TextCart>PRODUTO</TextCart>
            <div className={styles["product-name"]}>{productName}</div>
            <div className={styles["product-price"]}>{productPrice}</div>
            <TextCart>VALOR</TextCart>
            <div className={styles["product-quantity"]}>
              <button
                className={styles["btn-quantity"]}
                onClick={decrementQuantity}
              >
                -
              </button>
              <input type="text" value={quantity} readOnly />
              <button
                className={styles["btn-quantity"]}
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <div className={styles["valor-total"]}>
              <TextCart>VALOR TOTAL</TextCart>
              <div className={styles["product-price"]}>R$ 00,00</div>
            </div>
          </div>
        </main>
        <div className={styles["btns-modal"]}>
          <Button width="40.375rem" height="3.1875rem">
            COMPRAR
          </Button>
          <Button width="40.375rem" height="3.1875rem">
            ADICIONAR AO CARRINHO
          </Button>
        </div>
      </form>
    </Modal>
  );
}
