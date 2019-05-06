import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom">
            <Link className="navbar-brand" to="/">
                WuCast
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className={window.location.pathname === "/search" ? "nav-item active" : "nav-item"}>
                        <Link to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >
                            Search
                        </Link>
                    </li>
                    <li className={window.location.pathname === "/fav" ? "nav-item active" : "nav-item"}>
                        <Link to="/fav"
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