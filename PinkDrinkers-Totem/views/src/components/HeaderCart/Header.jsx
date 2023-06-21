import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/img/Logo.svg";
import Cart from "../../assets/img/cart.svg";

export function Header() {
  return (
    <header className={styles.headerProduto}>
      <img src={Logo} alt="Logotipo do Pink" className={styles.logoTipo} />
      <img src={Cart} alt="IconCart" className={styles.iconCart} title="Acessar Carrinho"/>
    </header>
  );
}
