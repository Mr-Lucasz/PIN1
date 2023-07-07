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

  return (
    <main
      className={`${styles.divMain} ${isClicked ? styles.clicked : ""} ${buttonsBlocked ? styles.disabled : ""}`}
      onClick={handleClick}
    >
      <span className={styles.span}>{children}</span>
      <img src={imagem} alt={optionPayment} className={styles.image} />
    </main>
  );
}
