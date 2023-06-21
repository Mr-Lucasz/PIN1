import React from "react";
import styles from "./TitleApp.module.css";

export function TitleApp({ title, onClick,  hoverPage }) {
    const titleAppClass = hoverPage ? `${styles["title-app"]} ${styles["hover-page"]}` : styles["title-app"];
    const handleClick = () => {
        if (onClick) {
          onClick();
        }
    };

    return (
      <div className={titleAppClass} onClick={handleClick}>
        <div className={styles.title1}>
          <span>{title}</span>
        </div>
      </div>
    );
  }