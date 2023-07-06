import React from "react";
import styles from "../Cart/BoxImg.module.css";

export function BoxImagem({ imagemSrc, tamanho, backgroundColor }) {
  const boxStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={`${styles.boxImagem} ${styles[tamanho]}`} style={boxStyle}>
      <img className={styles.imagem} src={imagemSrc} alt="Imagem" />
    </div>
  );
}
