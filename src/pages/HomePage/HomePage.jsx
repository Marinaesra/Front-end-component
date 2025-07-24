import React from "react";
import Menucomponent from "../../components/MenuComponent/Menucomponent";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <hr />
      <Menucomponent />
      <hr />
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
            width: "160px",
            height: "auto",
            objectFit: "contain",
          }}
        />

        <h1 style={{ font: '"Cabin", sans-serif', color: "#084040c4" }}>
          Esencia Activa
        </h1>
      </div>
      <hr />
      <p style={{ font: '"Cabin", sans-serif', color: "white" }}>
        Aqui os presentamos nuestro pequeño gran sueño, es un proyecto creado
        desde el corazón y para vosotros,esperamos que os guste tanto como para
        nosotros a sido crearlo.{" "}
      </p>
      <p style={{ font: '"Cabin", sans-serif', color: "#084040ff" }}>
        ~ BIENVENIDOS A VUESTRA CASA ~
      </p>
      <button
        style={{
          background: "#7abfe2ff",
          borderRadius: 150,
          borderColor: "#084040ff",
        }}
      >
        <Link to={"/login"}>
          {" "}
          <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
            {" "}
            Acceso{" "}
          </span>
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
