import React from "react";
import styles from "./TitleApp.module.css";

export function TitleApp({ title, onClick }) {
    return (
      <div className={styles["title-app"]} onClick={() => onClick()}>
        <div className={styles.title1}>
          <span>{title}</span>
        </div>
      </div>
    );
  }