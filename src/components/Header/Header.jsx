import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleInput = (e) => {
        setSearch(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/search?q=${search}`);
        }
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return isActive ? "my-active nav-link" : " nav-link";
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => {
                                    return isActive ? "my-active nav-link" : " nav-link";
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/useref "
                                className={({ isActive }) => {
                                    return isActive ? "my-active nav-link" : " nav-link";
                                }}
                            >
                                useref
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            onChange={(e) => {
                                handleInput(e);
                            }}
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;
