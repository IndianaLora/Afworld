import React from "react";

function Navbar() {
  const navbarData = [
    {
      id: 1,
      tittle: "Inicio",
      path: "/",
      classNamee: "navData",
    },

    {
      id: 2,
      tittle: "Productos",
      path: "/Products",
      classNamee: "navData",
    },
    {
      id: 3,
      tittle: "Sobre nosotros",
      path: "/About",
      classNamee: "navData",
    },
  ];

  return (
    <div className="navBar">
      <div className="logo"></div>
      <nav className="menu">
        {navbarData.map((data) => {
          return (
            <a href={data.path} className={data.classNamee} key={data.id}>
              {data.tittle}
            </a>
          );
        })}
      </nav>
      <div className="welcome-section">
        <h1 className="text-center">Bienvenido a AF World</h1>

        <h3 className="text-description">
          Accesorios en resina hechos a mano ♥
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
