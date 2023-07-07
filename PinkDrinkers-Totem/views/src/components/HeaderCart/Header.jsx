import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/img/Logo.svg";
import Cart from "../../assets/img/cart.svg";
import { ModalCart } from "../Cart/ModalCart";

export function Header({ showCart }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={styles.headerProduto}>
      <img src={Logo} alt="Logotipo do Pink" className={styles.logoTipo} />
      {showCart && (
        <img
          src={Cart}
          alt="IconCart"
          className={styles.iconCart}
          title="Acessar Carrinho"
          onClick={openModal}
        />
      )}
      <ModalCart isOpen={modalOpen} onClose={closeModal} />
    </header>
  );
}
