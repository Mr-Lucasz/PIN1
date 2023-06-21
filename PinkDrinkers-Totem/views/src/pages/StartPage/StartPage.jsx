import React from "react";
import styles from "./StartPageStyle.module.css";
import {TitleMain} from "../../components/TitleMain/TitleMain";
import refriImg from "../../assets/img/refrigerante.svg";
import {TitleApp} from "../../components/TitleApp";
import { useNavigate } from 'react-router-dom';

export  function StartPage() {
  const navigate = useNavigate();

  const handleTitleClick = async (e) => {
   e.
    navigate('/home-page');
};

  return (
    <div className= {styles.wrapper}>
   <TitleMain/>
   <div className={styles.imgRefri}>
   <img src={refriImg} alt="Logotipo do Ignite" />
    </div>
    <TitleApp title="INICIAR"  onClick={handleTitleClick}/>
   </div>
  );
}


