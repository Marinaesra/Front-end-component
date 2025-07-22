import React from "react";
import Menucomponent from "../../components/MenuComponent/Menucomponent";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <div style={{
        display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
      }}>
        <img
            src="/EsenciaActivaLogo.png"
            alt="Esencia Activa Logo"
            style={{
              top: "1rem",
              left: "1rem",
              width: "160px",
              height: "auto",
              objectFit: "contain",
            }}/>
          <h1>Esencia Activa</h1>
      </div>
      <hr />
      <Menucomponent />
      <hr />
            <button style={{
                      
                      background: "#7abfe2ff",
                      borderRadius: 150,
                    }}><Link to={"/login"}> <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>  Acceso </span></Link>
      </button>
    </div>

  );
};

export default HomePage;
