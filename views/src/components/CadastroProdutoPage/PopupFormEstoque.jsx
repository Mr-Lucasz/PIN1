import React, { useState } from 'react';
import Header from '../Header/Header';


function PopupFormEstoque() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const exibirPopup = () => {
      setIsPopupOpen(true);
    };
  
    const fecharPopup = () => {
      setIsPopupOpen(false);
    };

  return (
    <div>
      <Header />
      <div className='popup-form'>   
        <div className='popup-conteudo'>
        <h3>Título do PopUp</h3>
        <p>Conteúdo do PopUp</p>
        <button className="fechar-popup">Fechar</button>
            </div>
            </div>


    </div>
  );
}

export default PopupFormEstoque;
