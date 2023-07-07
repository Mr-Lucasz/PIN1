import React from "react";
import styles from "./TextCart.module.css";

export function TextCart({ children }) {
  return (

    <label className={styles.nomeText}>
         {children}
         </label>

  );
}


