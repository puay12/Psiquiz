import React from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import '/public/css/hero.css';

export const Hero = () => {
    const people = '/img/people.png';
    const pencil = '/img/pencil.png';
    const waveBig = '/img/wave_big.png';
    const wavePink = '/img/wavep_big.png';
    return(
        <div className="hero">
            <p className="judul">seperti apa<br/>kepribadianmu?</p>
            <hr />
            <Link to='/login'>
                <Button text='Mulai Tes' type='button'/>
            </Link>
            <img src={pencil} alt="pencil" className="pencil"/>
            <img src={people} alt="people" className="people"/>
            <img src={waveBig} alt="wave_big" className="wave_big"/>
            <img src={wavePink} alt="wave_pink" className="wave_pink"/>
        </div>
    );
};