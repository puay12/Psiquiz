import React from 'react';
import { Link } from 'react-router-dom';
import '/public/css/navbar.css';

export const Navbar1 = () => {
    const logo = "/img/logo2.png";
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-transparent">
            <Link className="navbar-brand" to="#">
                <img src={logo} alt="psi-quiz" className="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbar1" aria-controls="navbar1" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar1">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link one" to="/" >Beranda</Link>
                        <hr className="beranda" />
                    </li>
                    <li className="nav-item">
                        <a className="nav-link two" href="#howto" >Cara Mengerjakan</a>
                        <hr className="cara" />
                    </li>
                    <li className="nav-item end">
                        <Link className="nav-link end" to="/login" >Masuk</Link>
                        <hr className="login" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};