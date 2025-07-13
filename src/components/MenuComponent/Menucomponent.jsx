import React from "react";
import { Link } from "react-router";
//import { useDispatch, useSelector } from 'react-redux'
//import { changeMenuOptionActions } from './MenuComponentAction'

const Menucomponent = () => {
  return (
    <div>
      <button> <Link to={"/list"}> Listado de Productos </Link></button>
      <button><Link to={"/contact"}> Contacto </Link></button>
    </div>
  );
};

export default Menucomponent;

