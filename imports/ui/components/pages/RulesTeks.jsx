import React from 'react';
// import { RulesCollection } from '/imports/api/rules';
import { Navbar3 } from '../navbars/Navbar3';
import { IsiRule } from '../rulebox/IsiRule';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import '/public/css/rules.css';

export const RulesTeks = () => {
    const wave_rule = '/img/wave_rule.png';
    return(
        <div className="rules r-g">
            <Navbar3 />
            <p className='judul'>Peraturan</p>
            <div className="container rulebox">
                <IsiRule text='Pilih jawaban yang paling merepresentasikan dirimu.' />
                <IsiRule text='Setelah klik jawaban, maka tidak akan bisa mengganti jawaban dan secara otomatis berpindah ke soal selanjutnya.' />
                <IsiRule text='Hasil akan muncul setelah tes selesai.' />
                <IsiRule text='Kerjakan dengan jujur sesuai apa yang kamu rasakan.' />
            </div>
            <Link to='/pilih-tes/rules-tks/tes1'>
                <Button text='Mulai Tes' type='button'/>
            </Link>
            <img src={wave_rule} alt="wave_rule" className="wave_rule"/>
        </div>
    );
};