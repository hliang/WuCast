import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        WuCast
      </a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/fav"
              className={window.location.pathname === "/fav" ? "nav-link active" : "nav-link"}
            >
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;