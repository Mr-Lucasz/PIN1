import React, { useState} from "react";
import sytles from "./BoxProduto.module.css";
import sprintRefri from "../../assets/img/imagem.svg";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ModalCart } from "../Cart/ModalCart";


const mock = [{id_bebida: 1, nome_bebida: "Sprite-350ml", preco_bebida: 6.00, img_bebida: sprintRefri, categoria_bebida: "Refrigerante"}, 
{id_bebida: 2, nome_bebida: "Sprite-350ml", preco_bebida: 6.00, img_bebida: sprintRefri, categoria_bebida: "Refrigerante"},
{id_bebida: 3, nome_bebida: "Sprite-350ml", preco_bebida: 6.00, img_bebida: sprintRefri, categoria_bebida: "Refrigerante"},
{id_bebida: 4, nome_bebida: "Sprite-350ml", preco_bebida: 6.00, img_bebida: sprintRefri, categoria_bebida: "Refrigerante"},
{id_bebida: 5, nome_bebida: "Sprite-350ml", preco_bebida: 6.00, img_bebida: sprintRefri, categoria_bebida: "Refrigerante"},
{id_bebida: 6, nome_bebida: "Sprite-350ml", preco_bebida: 6.00, img_bebida: sprintRefri, categoria_bebida: "Refrigerante"},



];


export function BoxProduto() {
  const [products, setProducts] = useState(mock);

  const carregarMore = () => {
    setProducts(prevState => ([...prevState, ...mock]));
  };

  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
   
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className={sytles['box-produto-wrapper']} id="wrapper-box-id">
      <InfiniteScroll className={sytles['infinite-scroll-component']}
        dataLength={products.length}
        hasMore={true}
        next={carregarMore}
        loader={<h3>Carregando...</h3>}
        scrollableTarget="wrapper-box-id"
      >
        {products.map((product) => (
          <div key={product.id_bebida} className={sytles['box-produto']} onClick={openModal}>
            <div className={sytles['box-produto-img']}>
              <img className={sytles.imagem} alt="Imagem" src={product.img_bebida} />
            </div>
            <div className={sytles['infos-produto']}>
              <div className={sytles['props-name']}>{product.nome_bebida}</div>
              <div className={sytles['props-preco']}>{product.preco_bebida}</div>
            </div>
          </div>
          
        ))}
      
      </InfiniteScroll>
      <ModalCart isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};