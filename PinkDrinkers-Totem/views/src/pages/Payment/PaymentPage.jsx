import React, { useState, useEffect } from "react";
import styles from "./PaymentPage.module.css";
import { TitleApp } from "../../components/TitleApp";
import { Header } from "../../components/HeaderCart/Header";
import { Nav } from "../../components/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Buttons";
import { Option } from "./Option";
import Card from "../../assets/img/Card.svg";
import Pix from "../../assets/img/Pix.svg";
import Loading from "../../assets/img/Loading.svg";
import axios from "axios";

export function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { valorTotal, id_bebida } = location.state || {};

  const filters = [
    { name: "PRODUTOS NO CARRINHO", link: "#", maxWidth: "40rem" },
  ];
  const [optionSelected, setOptionSelected] = useState("");
  const [buttonsBlocked, setButtonsBlocked] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleArrowClick = () => {
    navigate("/homepage");
  };

  const submitPaymentClick = async () => {
    if (optionSelected) {
      try {
        const response = await axios.post("http://localhost:3001/newvenda", {
          id_bebida: 12,
          id_totem: 1,
          valor_venda: 12,
        });

        console.log(response.data); // Lidar com a resposta da requisição aqui

        alert("Pagamento realizado com sucesso!");
        setButtonsBlocked(true);
        setShowLoading(true);
      } catch (error) {
        console.log("Ocorreu um erro na requisição:", error);
      }
    } else {
      alert("Selecione uma opção de pagamento.");
    }
  };

  const handleOptionClick = (option) => {
    if (!buttonsBlocked) {
      setOptionSelected(option);
    }
  };

  const handlePageClick = () => {
    navigate("/homepage");
  };

  const handleReceberProdutoClick = () => {
    alert("Produto recebido com sucesso!");
    setShowFeedback(true);
  };

  useEffect(() => {
    if (showFeedback) {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        navigate("/submit-feedback");
      }, 2000);
    }
  }, [showFeedback]);

  useEffect(() => {
    if (showLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLoading]);

  return (
    <div className={styles.wrapperPayment}>
      <Header showCart={false} />
      <TitleApp title="PAGAMENTO" />
      <Nav filters={filters} backArrow={true} arrowOnClick={handleArrowClick} />
      <main className={styles.contentPayment}>
        <Option
          imagem={Card}
          onClick={() => handleOptionClick("CARTÃO DE CRÉDITO")}
          buttonsBlocked={buttonsBlocked}
          className={
            optionSelected === "CARTÃO DE CRÉDITO" ? styles.clicked : ""
          }
        >
          CARTÃO DE CRÉDITO
        </Option>
        <Option
          imagem={Card}
          onClick={() => handleOptionClick("CARTÃO DE DÉBITO")}
          buttonsBlocked={buttonsBlocked}
          className={
            optionSelected === "CARTÃO DE DÉBITO" ? styles.clicked : ""
          }
        >
          CARTÃO DE DÉBITO
        </Option>
        <Option
          imagem={Pix}
          onClick={() => handleOptionClick("PIX")}
          buttonsBlocked={buttonsBlocked}
          className={optionSelected === "PIX" ? styles.clicked : ""}
        >
          PIX
        </Option>
      </main>
      <div className={styles["position-button"]}>
        <Button
          width="40.375rem"
          height="3.1875rem"
          onClick={submitPaymentClick}
          disabled={buttonsBlocked}
          className={buttonsBlocked ? styles.blockedButton : ""}
        >
          CONFIRMAR
        </Button>
        <Button
          width="40.375rem"
          height="3.1875rem"
          onClick={handlePageClick}
          disabled={buttonsBlocked}
          className={buttonsBlocked ? styles.blockedButton : ""}
        >
          COMPRAR MAIS
        </Button>
        {buttonsBlocked && (
          <Button
            width="40.375rem"
            height="3.1875rem"
            onClick={handleReceberProdutoClick}
          >
            RECEBER PRODUTO
          </Button>
        )}
      </div>
      {showLoading && showFeedback && (
        <div className={styles.loadingOverlay}>
          <img src={Loading} alt="Loading" />
        </div>
      )}
    </div>
  );
}
