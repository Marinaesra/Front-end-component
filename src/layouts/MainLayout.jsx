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
        minHeight: "100vh",
       
    
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
