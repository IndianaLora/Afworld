import React from "react";

function Navbar() {
  const navbarData = [
    {
      tittle: "Inicio",
      path: "/Home",
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
    
    <div>
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
    </div>
  );
}

export default Navbar;
