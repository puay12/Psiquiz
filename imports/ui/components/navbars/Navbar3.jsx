import React from 'react';
import { ProfileBox } from '../profile/ProfileBox';
import { Link } from 'react-router-dom';
import '/public/css/navbar.css';

export const Navbar3 = () => {
    const logo = "/img/logo2.png";
    const avatar = "/img/avatar.png";
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
                        <Link className="nav-link one-2" to="/pilih-tes" >Pilih Tes</Link>
                        <hr className="piltes" /> 
                    </li>
                    <li className="nav-item end">
                        <div className="dropdown">
                            <img src={avatar} className="avatar dropbtn" alt="avatar"/>
                            <ProfileBox />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};