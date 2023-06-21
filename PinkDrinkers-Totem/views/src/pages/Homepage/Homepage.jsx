import React from "react";
import styles from "./Homepage.module.css";
import {TitleApp} from "../../components/TitleApp";
import Logo from "../../assets/img/Logo.svg";
import Cart from "../../assets/img/cart.svg";

export function HomePage() {


  return (
    <div className={styles.wrapperHome} >

    <header>
    <div className={styles.imgRefri}>
   <img src={Logo} alt="Logotipo do Ignite" />
   <img src={Cart} alt="Logotipo do Ignite" />
    </div>
      </header>
     <h1>HELLO WORLD</h1>
     <TitleApp title="PRODUTOS" />
      </div>
  );
}