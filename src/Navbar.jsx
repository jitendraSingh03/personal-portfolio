import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg " style={{padding:'10px 30px'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">JS DEVELOPERS </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="about">About</NavLink>
                        <NavLink className="nav-link" to="service">Services</NavLink>
                        <NavLink className="nav-link" to="contact" tabindex="-1" aria-disabled="true">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;