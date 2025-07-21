import React from "react";
import Menucomponent from "../../components/MenuComponent/Menucomponent";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>Esencia Activa</h1>
      <hr />
      <Menucomponent />
      <hr />
            <button style={{
                      
                      background: "#7abfe2ff",
                      borderradius: 150,
                    }}><Link to={"/login"}> <span style={{ font: '"Cabin", sans-serif', color: "#000000ff" }}>  Acceso </span></Link>
      </button>
    </div>

  );
};

export default HomePage;
