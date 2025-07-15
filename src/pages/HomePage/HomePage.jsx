import React from "react";
import Menucomponent from "../../components/MenuComponent/Menucomponent";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>Be Live</h1>
      <hr />
      <Menucomponent />
      <hr />
            <button><Link to={"/login"}> Acceso </Link>
      </button>
    </div>

  );
};

export default HomePage;
