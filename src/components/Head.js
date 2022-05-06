import React, { useState } from "react";
import { VscArchive } from "react-icons/vsc";
import "../App.css";
import Modal from "./Modals/Modal";
import Modal1 from "./Modals/Modal";
import { FcPrivacy, FcOk } from "react-icons/fc";

function Head() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [modalOpen1, setModalOpen1] = useState(false);
  const openModal1 = () => {
    setModalOpen1(true);
  };
  const closeModal1 = () => {
    setModalOpen1(false);
  };

  return (
    <div className="HeadContainer">
      <div className="LogoBlock">
        <img src="img/zzzzzz.png" alt="zzz" className="App-logo" />
      </div>
      <div
        className="NewTextBlock"
        onMouseOver={() => openModal()}
        onMouseOut={() => closeModal()}
      >
        Jobs
        <Modal open={modalOpen} header="Find the Right Job">
          Millions of jobs. Search by whatmatters to you and find the <br /> one
          that's right for you.
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
            }}
          >
            Start Using Glassdoor
          </button>
        </Modal>
      </div>
      <div
        className="NewTextBlock"
        onMouseOver={() => openModal1()}
        onMouseOut={() => closeModal1()}
      >
        Companies
        <Modal1 open={modalOpen1} header="Read Millions of Reviews">
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
            }}
          >
            Start Using Glassdoor
          </button>
        </Modal1>
      </div>
      <div className="NewTextBlock">Salaries</div>
      <div className="NewTextBlock">Carrers</div>
      <div className="TextLeft">Sign in</div>
      <div className="TextLeft">
        <VscArchive />
        Post Jobs
      </div>
      <div className="TextLeft">For Employers</div>
    </div>
  );
}

export default Head;
