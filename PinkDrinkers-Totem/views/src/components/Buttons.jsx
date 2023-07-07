import React from "react";
import styles from "./Buttons.module.css";

function Button({ children, width, height, onClick, disabled }) {
  const buttonStyle = {
    width: width,
    height: height,
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
