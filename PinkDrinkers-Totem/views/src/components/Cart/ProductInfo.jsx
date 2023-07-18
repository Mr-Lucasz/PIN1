import React from "react";
import styles from "./ProductInfo.module.css";
import { TextCart } from "./TextCart";

export function ProductInfo({
  productName,
  productPrice,
  quantity,
  decrementQuantity,
  incrementQuantity,
  updateQuantity,
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

  const handleQuantityChange = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    const newQuantity = parseInt(e.target.value);
    updateQuantity(newQuantity); // Chame a função updateQuantity para atualizar a quantidade no CartPage
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
      <TextCart>QUANTIDADE</TextCart>
      <div className={styles["product-quantity"]}>
        <button
          className={styles["btn-quantity"]}
          onClick={handleDecrementQuantity}
        >
          -
        </button>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
        />
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
