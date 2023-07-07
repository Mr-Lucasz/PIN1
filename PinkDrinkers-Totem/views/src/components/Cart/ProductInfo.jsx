import { useState } from "react";
import React  from "react";
import styles from "./ProductInfo.module.css";
import { TextCart } from "./TextCart";


export function ProductInfo({ productName, productPrice, decrementQuantity, incrementQuantity }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decrementQuantity(); // Chama a função recebida por props
    }
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
    incrementQuantity(); // Chama a função recebida por props
  };

  return (
    <div className={styles["product-info"]}>
      <TextCart>PRODUTO</TextCart>
      <div className={styles["product-name"]}>{productName}</div>
      <div className={styles["product-price"]}>{productPrice}</div>
      <TextCart>VALOR</TextCart>
      <div className={styles["product-quantity"]}>
        <button className={styles["btn-quantity"]} onClick={handleDecrementQuantity}>
          -
        </button>
        <input type="text" value={quantity} readOnly />
        <button className={styles["btn-quantity"]} onClick={handleIncrementQuantity}>
          +
        </button>
      </div>
      <div className={styles["valor-total"]}>
        <TextCart>VALOR TOTAL</TextCart>
        <div className={styles["product-price"]}>R$ 00,00</div>
      </div>
    </div>
  );
}
