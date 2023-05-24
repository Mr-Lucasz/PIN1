import React, { useState } from 'react';

import Modal from 'react-modal';


function PopupFormEstoque() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const exibirPopup = () => {
      setIsPopupOpen(true);
    };
  
    const fecharPopup = () => {
      setIsPopupOpen(false);
    };

    return (
      <div className="Container">
        <button onClick={isPopupOpen}>Open Modal</button>
        <Modal
          isOpen={exibirPopup}
          onRequestClose={fecharPopup}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <h2>Hello - I am a modal!</h2>
          <hr />
          <p>
            We maintain that accessibility is a key component of any modern web
            application. As such, we have created this modal in such a way that it
            fulfills the accessibility requirements of the modern web. We seek to
            keep the focus on accessibility while providing a functional, capable
            modal component for general use.
          </p>
          <button onClick={fecharPopup}>Close</button>
        </Modal>
      </div>
    );
  
}

export default PopupFormEstoque;
