import React from "react";
import "../App.css";

const Modal1 = (props) => {
  const { header } = props;
  return (
    <div className="modal1">
      <section>
        <header>{header}</header>
        <main>{props.children}</main>
      </section>
    </div>
  );
};
export default Modal1;
