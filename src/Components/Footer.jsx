import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import "../index.css";

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={`footer ${state.theme}`} style={{ gap: "40rem" }}>
      <div>
        <img
          alt="DH logo"
          src={
            state.theme === "light" ? "../images/DHB.png" : "../images/DH.png"
          }
        />
      </div>

      <div>
        <img
          src={
            state.theme === "light"
              ? "../images/ico-facebookB.png"
              : "../images/ico-facebook.png"
          }
          alt="Facebook icon"
          style={{ zIndex: "1000", width: "25px", height: "25px" }}
        />

        <img
          src={
            state.theme === "light"
              ? "../images/ico-instagramB.png"
              : "../images/ico-instagram.png"
          }
          alt="Facebook icon"
          style={{ zIndex: "1000", width: "25px", height: "25px" }}
        />

        <img
          src={
            state.theme === "light"
              ? "../images/ico-tiktokB.png"
              : "../images/ico-tiktok.png"
          }
          alt="Facebook icon"
          style={{ zIndex: "1000", width: "25px", height: "25px" }}
        />

        <img
          src={
            state.theme === "light"
              ? "../images/ico-whatsappB.png"
              : "../images/ico-whatsapp.png"
          }
          alt="Facebook icon"
          style={{ zIndex: "1000", width: "25px", height: "25px" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
