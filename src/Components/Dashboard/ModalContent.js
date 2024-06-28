// ModalContent.js
import React from 'react';
import "./dashboard.css";

const ModalContent = ({ closeModal }) => {
  return (
    <div className="modal-content">
      <h2>Modal Title</h2>
      <p>Modal content goes here...</p>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

export default ModalContent;
