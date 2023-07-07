import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./ModalCart.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BoxImg } from "./BoxImg";
import Button from "../Buttons";
import { useNavigate } from "react-router-dom";
import { ProductInfo } from "./ProductInfo";

export function ModalCart({ isOpen, onClose, product }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handlePageClick = async (e) => {
    const productData = {
      productImage: product.Bebida.img_bebida,
      productName: product.Bebida.nome_bebida,
      productPrice: parseFloat(product.Bebida.valor_bebida),
      quantity: quantity,
    };
    navigate("/cart-submit-buy", { state: productData });
  };
  
  const handlePageClick1 = async (e) => {
    navigate("/confirm-payment");
  };

  if (!product) {
    return null; // Retorna null se product for null ou undefined
  }

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
            <IoIosArrowBack
              className={styles["back-icon"]}
              onClick={onClose}
            />
            ADICIONAR CARRINHO
          </h2>
        </header>
        <main>
          <BoxImg
            imagemSrc={product.Bebida.img_bebida}
            tamanho="medium"
            backgroundColor="rgba(237, 55, 68, 0.10)"
          />
          <ProductInfo
            productName={product.Bebida.nome_bebida}
            productPrice={parseFloat(product.Bebida.valor_bebida)}
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
        </main>
        <div className={styles["btns-modal"]}>
          <Button width="40.375rem" height="3.1875rem" onClick={handlePageClick1}>
            COMPRAR
          </Button>
          <Button
            type="button"
            width="40.375rem"
            height="3.1875rem"
            onClick={handlePageClick}
          >
            ADICIONAR AO CARRINHO
          </Button>
          <IoIosArrowBack className={styles["close-icon"]} onClick={onClose} />
        </div>
      </form>
    </Modal>
  );
}
