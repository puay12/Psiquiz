import React from 'react';
import { Navbar2 } from '../navbars/Navbar2';
import { Tes } from '../Pilih_Tes/Tes';
import '/public/css/pilihtes.css';

export const PilihTes = () => {
    const soalgambar = '/img/soalgambar.png';
    const soalteks = '/img/soalteks.png';
    const wave_tes = '/img/wave_tes.png';
    const segitigakiri = '/img/segitigakiri.png';
    const segitigakanan = '/img/segitigakanan.png';
    return(
        <div className="pilihtes">
            <Navbar2 />
            <p className="judul">Pilih Tes</p>
            <hr className="line1"/>
            <div className="container">
                <div className="row d-flex flex-row">
                    <div className="col-md-6">
                        <Tes link='/pilih-tes/rules-gmbr' src={soalgambar} alt='soalgambar' jenis='Soal Gambar' kelas='soalgambar'/>
                    </div>
                    <div className="col-md-6">
                        <Tes link='/pilih-tes/rules-tks' src={soalteks} alt='soalteks' jenis='Soal Teks' kelas='soalteks'/>
                    </div>
                </div>
            </div>
            <img src={wave_tes} alt="wave_tes" className="wave_tes"/>
            <img src={segitigakiri} alt="segitigakiri" className="segitigakiri"/>
            <img src={segitigakanan} alt="segitigakanan" className="segitigakanan"/>
        </div>
    );
};