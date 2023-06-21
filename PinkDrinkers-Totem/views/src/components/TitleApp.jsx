import React from "react";
import styles from "./TitleApp.module.css";

export function TitleApp({ title, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={styles["title-app"]} onClick={handleClick}>
      <div className={styles.title1}>
        <span>{title}</span>
      </div>
    </div>
  );
}