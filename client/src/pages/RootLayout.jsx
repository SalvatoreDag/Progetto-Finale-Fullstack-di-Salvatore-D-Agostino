import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function RootLayout() {
  return (
    <>
  
      <div >
        <div >
          {/* Sidebar content */}
          <Header />
        </div>
        <div >
            {/* Main content */}
            <Outlet />
        </div>
      </div>
    </>
  );
}


export default RootLayout;
