import React from "react";
import styles from "./TitleMainStyle.module.css";

export function TitleMain() {
  return (

      <div className={styles['title-pai']}>
        <div className={styles.title1}>
          <span>P</span>
          <span>I</span>
          <span>N</span>
          <span>K</span>
        </div>
        <div className={styles.title2}>
          <span>D</span>
          <span>R</span>
          <span>I</span>
          <span>N</span>
          <span>K</span>
          <span>E</span>
          <span>R</span>
          <span>S</span>
        </div>
      </div>
    
  );
}

