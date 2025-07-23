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
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)), url('/fondo.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2rem",
        }}
      ></div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
