import React from 'react';
import { Navbar3 } from '../navbars/Navbar3';
import { SoalTeks } from '../soal/SoalTeks';
import '/public/css/soal.css';

export const TesTeks = () => {
    return(
        <div className='soal s-teks'>
            <Navbar3 />
            <SoalTeks />
        </div>
    );
};