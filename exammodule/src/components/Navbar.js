import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";


function Navbar(props) {
   
  return (
    <div>
       <h1> {props.userName}</h1>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/user/register" className="nav-link" aria-current="page" >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/authenticate" className="nav-link" >
                    Login
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>

       
      </header>
    </div>
  );
}

export default Navbar;
