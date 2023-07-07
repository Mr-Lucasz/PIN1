import React from "react";
import { useState, useEffect } from "react";
import styles from "./CartPage.module.css";
import { TitleApp } from "../../components/TitleApp";
import { Header } from "../../components/HeaderCart/Header";
import { Nav } from "../../components/Nav";
import { useNavigate } from "react-router-dom";
import { BoxImg } from "../../components/Cart/BoxImg";
import { ProductInfo } from "../../components/Cart/ProductInfo";
import Button from "../../components/Buttons";
import { useLocation } from "react-router-dom";

export function CartPage() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  // Recuperar as informações do produto da URL
  const queryParams = new URLSearchParams(location.search);
  const productData = JSON.parse(queryParams.get("productData"));
  const { productImage, productName, productPrice } = productData || {};

  useEffect(() => {
    if (productData && productData.quantity) {
      setQuantity(productData.quantity);
    }
  }, [productData]);
  
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
          backgroundColor="rgba(237, 55, 68, 0.10)"
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
        <Button width="40.375rem" height="3.1875rem" onClick={handlePageClick}>
          CONFIRMAR COMPRA
        </Button>
      </div>
    </div>
  );
}
