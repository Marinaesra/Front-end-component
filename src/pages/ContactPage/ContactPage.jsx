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
        <h1> Donde Encontrarnos </h1>
        <hr />
        <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
          <span>Avenida Mediterráneo, Edificio Aranzur nº8</span>
          <span>Esencia Activa</span>
          <span>Málaga</span>
        </div>
        <hr />
        <h2>Creadores de este Sueño</h2>
        <hr />
        <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
          <span>Marina Escaño Rando</span>
          <span>Málaga</span>
        </div>
        <div>
          <button
            style={{
              background: "#7abfe2ff",
              borderradius: 150,
              gap: 50,
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
