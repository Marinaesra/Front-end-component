import React from "react";
import { Link } from "react-router";

const Menucomponent = () => {
  return (
    <div>
      <button>
        {" "}
        <Link to={"/list"}> Listado de Productos </Link>
      </button>
      <button>
        <Link to={"/contact"}> Contacto </Link>
      </button>
    </div>
  );
};

export default Menucomponent;
