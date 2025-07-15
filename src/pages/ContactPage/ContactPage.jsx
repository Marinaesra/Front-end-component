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
        <h1> *Contacto*</h1>
        <hr />
        <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
          <span>Avenida Mediterráneo, Edificio Aranzur nº8</span>
          <span>Be Live</span>
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
          <button onClick={goToReturn}>Incio</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
