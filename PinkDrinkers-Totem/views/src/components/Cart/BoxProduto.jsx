import React from "react";
import sytles from "./BoxProduto.module.css";
import sprintRefri from "../../assets/img/imagem.svg";

export function BoxProduto() {
  return (

      <div className={sytles['box-produto-wrapper']}>
        <div className={sytles['box-produto']}>
          <div className={sytles['box-produto-img']}>
            <img className={sytles.imagem} alt="Imagem" src={sprintRefri} />
          </div>
          <div className={sytles['infos-produto']}>
          <div className={sytles['props-name']}>Sprite-350ml</div>
            <div className={sytles['props-preco']}>R$6,00</div>
          </div>
        </div>
        <div className={sytles['box-produto']}>
          <div className={sytles['box-produto-img']}>
            <img className={sytles.imagem} alt="Imagem" src={sprintRefri} />
          </div>
          <div className={sytles['infos-produto']}>
          <div className={sytles['props-name']}>Sprite-350ml</div>
            <div className={sytles['props-preco']}>R$6,00</div>
          </div>
        </div>
        <div className={sytles['box-produto']}>
          <div className={sytles['box-produto-img']}>
            <img className={sytles.imagem} alt="Imagem" src={sprintRefri} />
          </div>
          <div className={sytles['infos-produto']}>
          <div className={sytles['props-name']}>Sprite-350ml</div>
            <div className={sytles['props-preco']}>R$6,00</div>
          </div>
        </div>
        
      </div>

  );
};