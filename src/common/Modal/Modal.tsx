import React, { ReactNode } from "react";

type ModalProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const Modal = ({ id, title, children }: ModalProps) => {
  return (
    <div id={id} className="modal-container">
      <div className="modal-container__title">
        <h3>{title}</h3>
      </div>
      <div className="modal-container__inner">{children}</div>
    </div>
  );
};

export default Modal;
