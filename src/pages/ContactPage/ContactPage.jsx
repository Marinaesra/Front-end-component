import React from "react";
import { useNavigate } from "react-router";

const ContactPage = () => {
  const navigate = useNavigate();

  const goToReturn = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <img
            src="/EsenciaActivaLogo.png"
            alt="Esencia Activa Logo"
            style={{
              top: "1rem",
              left: "1rem",
              width: "90px",
              height: "auto",
              objectFit: "contain",
            }}
          />
          <h2 style={{ font: '"Cabin", sans-serif', color: "#084040c4" }}>
            {" "}
            DONDE ENCONTRARNOS{" "}
          </h2>
        </div>
        <hr />
        <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
          <span>~ Avenida Mediterráneo, Edificio Aranzur nº8</span>
          <span>~ Esencia Activa</span>
          <span>~ Málaga</span>
        </div>
        <hr />
        <h2 style={{ font: '"Cabin", sans-serif', color: "#084040c4" }}>
          ~ Creadora De Este Sueño ~
        </h2>
        <hr />
        <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
          <span>~ Marina Escaño Rando</span>
          <span>~ Málaga</span>
        </div>
        <hr />
        <div>
          <button
            style={{
              background: "#7abfe2ff",
              borderRadius: 150,
              gap: 50,
              borderColor: "#084040ff",
            }}
            onClick={goToReturn}
          >
            <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
              {" "}
              Incio
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
