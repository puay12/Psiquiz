import React from 'react';
import { Steps } from '../steps/Steps';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import '/public/css/howto.css';

export const Howto = () => {
    const manbulb = '/img/manbulb.png';
    const waveSmall = '/img/wave_small.png';
    const laptop = '/img/laptop.png';
    const line = '/img/line4.png';
    return(
        <div className="howto">
            <img src={manbulb} alt="manbulb" className="manbulb" id="howto"/>
            <img src={waveSmall} alt="wave_small" className="wave_small"/>
            <img src={laptop} alt="laptop" className="laptop"/>
            <div className='container-fluid step-container'>
                <Steps text='Pilih tes yang diinginkan' />
                <img src={line} alt="line1" className="line"/>
                <Steps text='Baca peraturan dari soal dengan benar' />
                <img src={line} alt="line1" className="line"/>
                <Steps text='Kerjakan soal yang diberikan dengan jujur' />
            </div>
            <Link to='/login'>
                <Button text='Mulai Tes' type='button'/>
            </Link>
        </div>
    );
};