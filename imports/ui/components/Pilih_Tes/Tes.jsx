import React from 'react';
import { Link } from 'react-router-dom';
import '/public/css/pilihtes.css';

export const Tes = (tes) => {
    return(
        <div className="tes-con">
            <Link to={tes.link}>
                <div className="tes">
                    <img src={tes.src} alt={tes.alt} className={tes.kelas}/>
                    <p className="jenis_tes">{tes.jenis}</p>
                </div>
            </Link>
        </div>
    );
};