import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
