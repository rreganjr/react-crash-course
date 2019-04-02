import React from "react";

// stateless functional component - note no lifecycle hooks, only render
const NavBar = ({ totalCounters }) => {
  console.log("navbar.render()");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href=".">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
