import React from "react";
import styles from "./Homepage.module.css";
import {TitleApp} from "../../components/TitleApp";
import {Header} from "../../components/HeaderCart/Header";
import {Nav} from "../../components/Nav";

export function HomePage() {
  const filters = [
    { name: "TODOS",link: "#"  },
    { name: "REFRIGERANTE", link: "#" },
    { name: "ENERGÉTICO",link: "#"  },
    { name: "SUCO", link: "#"  },
    { name: "ÁGUA", link: "#"  }
  ];

  return (
    <div className={styles.wrapperHome} >
      <Header />
      <main className={styles.content}>
     <TitleApp title="PRODUTOS" />
     <Nav filters={filters} />
     <div className={styles.blocos}>

     </div>
     </main>
      </div>
  );
}