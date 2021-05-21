import React from "react";

function Navbar() {
  const navbarData = [
    {
      tittle: "Inicio",
      path: "/",
      className: "navData",
    },

    {
      tittle: "Productos",
      path: "/Products",
      className: "navData",
    },
    {
      tittle: "Sobre nosotros",
      path: "/About",
      className: "navData",
    },
  ];

  return (
    <div className="navBar">
      <div className="logo"></div>
      <nav class="menu">
        {navbarData.map((data) => {
          return (
            <a href={data.path} className={data.className}>
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
