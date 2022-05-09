import React from "react";
import "../App.css";
import { FcPrivacy } from "react-icons/fc";
const Modal2 = () => {
  return (
    <div className="modal">
      <section>
        <header>Read Millions of Reviews</header>
        <main>
          Read anonymous reviews on over 600,000 companies <br /> worldwide from
          people tat work there.
          <FcPrivacy
            style={{
              display: "flex",
              float: "right",
              height: "70px",
              width: "70px",
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
  );
};
export default Modal2;
