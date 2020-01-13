import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to={'/'}>CRUD</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/'} activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/nuevo-producto'} activeClassName="active"  >Agregar un producto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>
);