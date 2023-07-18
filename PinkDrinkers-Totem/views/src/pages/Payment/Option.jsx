import React, { useState } from "react";
import styles from "./Option.module.css";

export function Option({ onClick, optionPayment, imagem, children, buttonsBlocked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (onClick && !buttonsBlocked) {
      onClick();
      setIsClicked(true);
    }
  };

  const mainClassName = `${styles.divMain} ${isClicked ? styles.clicked : ""} ${buttonsBlocked ? styles.disabled : ""}`;

  return (
    <main className={mainClassName} onClick={handleClick}>
      <span className={styles.span}>{children}</span>
      <img src={imagem} alt={optionPayment} className={styles.image} />
    </main>
  );
}
