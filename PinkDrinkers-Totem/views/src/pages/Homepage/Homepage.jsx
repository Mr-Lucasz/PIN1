import React from "react";
import styles from "./Homepage.module.css";
import {TitleApp} from "../../components/TitleApp";
import {Header} from "../../components/HeaderCart/Header";
import {Nav} from "../../components/Nav";
import { BoxProduto } from "../../components/Cart/BoxProduto";

export function HomePage() {
  const filters = [
    { name: "TODOS",link: "#"},
    { name: "REFRIGERANTE", link: "#" },
    { name: "ENERGÉTICO",link: "#"  },
    { name: "SUCO", link: "#"  },
    { name: "ÁGUA", link: "#"  }
  ].map((filter) => ({ ...filter, maxWidth: "250px" }));

  return (
    <div className={styles.wrapperHome} >
     <Header showCart={true} />
      <main className={styles.content}>
     <TitleApp title="PRODUTOS" />
    <Nav filters={filters} />
     <BoxProduto />
     </main>
      </div>
  );
}