import React from "react";
import "../App.css";
import { FcOk } from "react-icons/fc";
const Modal1 = () => {
  return (
    <>
      <div className="modal1">
        <section>
          <header>Find the Right Job</header>
          <main>
            Millions of jobs. Search by whatmatters to you and find the
            <br /> one that's right for you.
            <FcOk
              style={{
                display: "flex",
                float: "right",
                height: "50px",
                width: "50px",
              }}
            />
            <button
              style={{
                display: "block",
                background: "white",
                marginTop: "5px",
                borderRadius: "3px",
                padding: "8px",
                border: "0.5px solid #74c0fc",
                color: "#74c0fc",
                cursor: "pointer",
              }}
            >
              Start Using Glassdoor
            </button>
          </main>
        </section>
      </div>
    </>
  );
};
export default Modal1;
