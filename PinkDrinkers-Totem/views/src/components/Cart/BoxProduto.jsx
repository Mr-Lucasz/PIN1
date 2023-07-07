import React, { useState, useEffect } from "react";
import sytles from "./BoxProduto.module.css";
import sprintRefri from "../../assets/img/imagem.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import { ModalCart } from "../Cart/ModalCart";
import axios from "axios";

export function BoxProduto() {
  const [products, setProducts] = useState([]);
  let baseUrl = "http://localhost:3001";
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(baseUrl + "/selectestoque");
      const data = response.data.data;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const carregarMore = () => {
    setProducts((prevState) => [...prevState, ...products]);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };
  

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={sytles["box-produto-wrapper"]} id="wrapper-box-id">
      <InfiniteScroll
        className={sytles["infinite-scroll-component"]}
        dataLength={products.length}
        hasMore={true}
        next={carregarMore}
        loader={<h3>Carregando...</h3>}
        scrollableTarget="wrapper-box-id"
      >
        {products.map((product) => (
        <div
        key={product.id_itemestoque}
        className={sytles["box-produto"]}
        onClick={() => openModal(product)}
      >
            <div className={sytles["box-produto-img"]}>
              <img
                className={sytles.imagem}
                alt="Imagem"
                src={product.Bebida.img_bebida}
              />
            </div>
            <div className={sytles["infos-produto"]}>
              <div className={sytles["props-name"]}>
                {product.Bebida.nome_bebida}
              </div>
              <div className={sytles["props-preco"]}>
                {product.Bebida.valor_bebida.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
      <ModalCart isOpen={modalOpen} onClose={closeModal} product={selectedProduct} />

    </div>
  );
}
