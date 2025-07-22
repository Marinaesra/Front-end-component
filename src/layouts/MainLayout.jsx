import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/fondo.jpg')",
        backgroundSize: "cover",
        opacity: 0.5,
        zIndex: 0,
      }}
    >
      <Outlet />
    </div>
  );
};

export default MainLayout;
