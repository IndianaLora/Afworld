import React from "react";

function Navbar() {
  const navbarData = [
    {
      id: 1,
      tittle: "Home",
      path: "/",
      classNamee: "navData",
    },

    {
      id: 2,
      tittle: "Products",
      path: "/Products",
      classNamee: "navData",
    },
    {
      id: 3,
      tittle: "About resin",
      path: "/About",
      classNamee: "navData",
    },
  ];

  return (
    <>
      <div className="welcome-section">
      <nav className="menu">
          {navbarData.map((data) => {
            return (
              <a href={data.path} className={data.classNamee} key={data.id}>
                {data.tittle}
              </a>
            );
          })}
        </nav>
        <h1 className="text-center"> Resin World</h1>
        <h3 className="text-description">
          Page dedicated to the resin amazing world ♥
        </h3>
        </div>
       
     
      </>
   
  );
}

export default Navbar;
