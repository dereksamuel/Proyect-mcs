import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  function closeModal() {
    document.querySelector('.modal').classList.remove('Visible');
    document.querySelector('.modal').classList.toggle('notVisible');
  }
  return ReactDOM.createPortal(<div className="Modal">
    <div className="Modal_view" onClick={closeModal}></div>
    <div className="Modal_container">
      <i className="fas fa-window-close cancel" onClick={closeModal}></i>
      {children}
    </div>
  </div>, document.querySelector('#modal'));
}

export default Modal;
