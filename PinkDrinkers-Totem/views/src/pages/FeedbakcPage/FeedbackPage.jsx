import React, { useState, useEffect } from "react";
import styles from "./FeedbackPage.module.css";
import { Header } from "../../components/HeaderCart/Header";
import { TitleApp } from "../../components/TitleApp";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";

export function FeedbackPage(props) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [choosedStars, setChoosedStars] = useState(0);

  const setStar = (value) => {
    setChoosedStars(value);
  };
  const handleClick = async (e) => {
    navigate("/homepage");
  };
  const getActiveStar = (value) => {
    return props.stars >= value ? styles.active : "";
  };

  useEffect(() => {
    const a = {
      1: "Oh. Desculpe, você teve uma experiência ruim :(",
      2: "Vamos tentar melhorar.",
      3: "Agradeço!",
      4: "Obrigado! :0",
      5: "Você é demais! :)",
    };
    const b = choosedStars;

    setMessage(a[b]);
  }, [choosedStars]);

  const renderCommender = () => {
    if (choosedStars !== 0 && message && message.length) {
      return (
        <div className={styles.commender}>
          <p className={styles.commender_tit}>
          Você avaliou isso {`${choosedStars} ${
              choosedStars > 1 ? "Estrelas!" : "star"
            }`}
          </p>
          <p className={styles.commender_tit}>{message}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={styles.feedbackWrapper}>
      <Header showCart={false} />
      <TitleApp title="OBRIGADO!" />
      <main className={styles.divMain}>
        <div className={styles.starfield}>
          {[1, 2, 3, 4, 5].map((value) => (
            <div
              key={value}
              className={`star ${getActiveStar(value)}`}
              onClick={() => setStar(value)}
            >
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          ))}
        </div>
      </main>
      {renderCommender()}
      <div className={styles.btnArea}>
        <button className={styles.button} onClick={handleClick}>Voltar para a página inicial</button>
      </div>

    </div>
  );
}
