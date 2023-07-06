import React from "react";
import styles from "./Buttons.module.css";

function Button({ children, width, height }) {
  const buttonStyle = {
    width: width,
    height: height,
  };

  return (
    <button className={styles.button} style={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
