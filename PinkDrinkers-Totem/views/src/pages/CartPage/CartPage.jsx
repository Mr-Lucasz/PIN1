import React from "react";
import { useState } from "react";
import styles from "./CartPage.module.css";
import { TitleApp } from "../../components/TitleApp";
import { Header } from "../../components/HeaderCart/Header";
import { Nav } from "../../components/Nav";
import { useNavigate } from "react-router-dom";
import { BoxImg } from "../../components/Cart/BoxImg";
import { ProductInfo } from "../../components/Cart/ProductInfo";
import Button from "../../components/Buttons";

export function CartPage({ productImage, productName, productPrice }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const filters = [
    { name: "PRODUTOS NO CARRINHO", link: "#", maxWidth: "40rem" },
  ];
  const handleArrowClick = async (e) => {
    navigate("/homepage");
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handlePageClick = async (e) => {
    navigate("/confirm-payment");
  };

  return (
    <div className={styles.wrapperCart}>
      <Header showCart={false} />
      <TitleApp title="CARRINHO" />
      <Nav filters={filters} backArrow={true} arrowOnClick={handleArrowClick} />
      <main className={styles.contentCart}>
        <BoxImg
          imagemSrc={productImage}
          tamanho="medium"
          backgroundColor="rgba(237, 55, 68, 0.10"
        />
        <ProductInfo
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
      </main>
      <div className={styles["position-button"]}>
      <Button
            width="40.375rem"
            height="3.1875rem"
            onClick={handlePageClick}
          >
            CONFIRMAR COMPRA
          </Button>
          </div>
    </div>
  );
}
