import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light p-3">
      <div className="container-fluid">
        <h3>
          Counters <span className="badge bg-secondary">{totalCounters}</span>
        </h3>
      </div>
    </nav>
  );
};

export default NavBar;
