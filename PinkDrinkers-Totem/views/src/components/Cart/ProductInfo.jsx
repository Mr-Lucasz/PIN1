import { useState } from "react";
import React from "react";
import styles from "./ProductInfo.module.css";
import { TextCart } from "./TextCart";

export function ProductInfo({
  productName,
  productPrice,
  quantity,
  decrementQuantity,
  incrementQuantity,
}) {
  const handleDecrementQuantity = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      decrementQuantity();
    }
  };

  const handleIncrementQuantity = (e) => {
    e.preventDefault();
    incrementQuantity();
  };

  const calculateTotal = () => {
    const total = quantity * productPrice;
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className={styles["product-info"]}>
      <TextCart>PRODUTO</TextCart>
      <div className={styles["product-name"]}>{productName}</div>
      <div className={styles["product-price"]}>{productPrice}</div>
      <TextCart>VALOR</TextCart>
      <div className={styles["product-quantity"]}>
        <button
          className={styles["btn-quantity"]}
          onClick={handleDecrementQuantity}
        >
          -
        </button>
        <input type="text" value={quantity} readOnly />
        <button
          className={styles["btn-quantity"]}
          onClick={handleIncrementQuantity}
        >
          +
        </button>
      </div>
      <div className={styles["valor-total"]}>
        <TextCart>VALOR TOTAL</TextCart>
        <div className={styles["product-price"]}>{calculateTotal()}</div>
      </div>
    </div>
  );
}
