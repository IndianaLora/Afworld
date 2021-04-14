import React from "react";

function Navbar() {
  const navbarData = [
    {
      tittle: "",
      path: "",
      className: "navData",
    },

    {
      tittle: "",
      path: "",
      className: "navData",
    },
    {
      tittle: "",
      path: "",
      className: "navData",
    },
  ];

  return (
    <div>
      <nav class="menu">
        {navbarData.map((data) => {
          return (
            <a href="#" className={data.className}>
              {data.tittle}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
