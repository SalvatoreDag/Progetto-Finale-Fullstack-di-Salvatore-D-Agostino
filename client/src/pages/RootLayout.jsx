import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function RootLayout() {
  return (
    <>
      {/* <Header />
      <Outlet /> */}
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
// const RootLayout = () => {
// return (
//   <div className="flex">
//     {/* Barra laterale */}
//     <div className="w-1/4 bg-gray-200">
//       {/* Includi il contenuto della tua barra laterale */}
//       <Header />
//     </div>

//     {/* Contenuto principale */}
//     <div className="w-3/4 p-4">
//       <Outlet />
//     </div>
//   </div>
// );
// return (
//   <div className="flex">
//     {/* Barra laterale */}
//     <div className="w-1/4 bg-gray-200">
//       {/* Includi il contenuto della tua barra laterale */}
//       <Header />
//     </div>

//     {/* Contenuto principale */}
//     <div className="w-3/4 p-4">
//       <Outlet />
//     </div>
//   </div>
// );
// };

export default RootLayout;
