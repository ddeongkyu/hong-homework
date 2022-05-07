import React from "react";
import "../App.css";

const Modal2 = (props) => {
  const { header } = props;
  return (
    <div className="modal">
      <section>
        <header>{header}</header>
        <main>{props.children}</main>
      </section>
    </div>
  );
};
export default Modal2;
