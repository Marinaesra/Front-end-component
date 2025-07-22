import React from "react";
import { Link } from "react-router";

const Menucomponent = () => {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"center", alignItems:"center", gap:40}}>
        <button
          style={{
            background: "#7abfe2ff",
            borderRadius: 150,
            gap: 50,
          }}
        >
          <Link to={"/list"}>
            <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
              {" "}
              Listado de Productos{" "}
            </span>
          </Link>
        </button>
        <button
          style={{
            background: "#7abfe2ff",
            borderRadius: 150,
          }}
        >
          <Link to={"/contact"}>
            <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>
              Contacto{" "}
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menucomponent;
