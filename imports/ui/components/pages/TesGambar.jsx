import React from 'react';
import { Navbar3 } from '../navbars/Navbar3';
import { SoalGambar } from '../soal/SoalGambar';
import '/public/css/soal.css';

export const TesGambar = () => {
    return(
        <div className='soal s-gambar'>
            <Navbar3 />
            <SoalGambar />
        </div>
    );
};