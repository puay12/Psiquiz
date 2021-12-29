import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { useRecoilState } from "recoil";
import { TesGambarCollection } from "../../../api/tes_gambar";
import { counterIndex } from "/imports/ui/store/index";
import { useState } from "react";
import "/public/css/soal.css";

export const SoalGambar = () => {
    const wave_rule = '/img/wave_rule.png';
    const [isEnding, setEnding] = useState(false);
    const [dataSoal, setdataSoal] = useRecoilState(counterIndex);
    const [jawaban, setJawaban] = useState([]);
    const [nomor, setNomor] = useState(0); 

    const soal = useTracker(() => TesGambarCollection.find().fetch());
    const soalCount = useTracker(() => TesGambarCollection.find().count());

    React.useEffect(() => {
        setdataSoal({ ...dataSoal, totalSoal: soalCount, data: soal });
    }, [soalCount]);

    const changeSoal = (index) => {
        const ele = document.getElementsByName("soal");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        setNomor(nomor+1);
        jawaban.push(index);

        if(jawaban.length == soalCount){
            setEnding(true);
        }
    }

    return (
        <div className="container soal-box">
        {isEnding &&  
            <div className='hasil-box'>
                <h1 className='hasil'>Hasil Tesmu</h1>
                {dataSoal?.data?.map((value, idx) => {
                    return (
                        <div className="row hasil" key={value._id}>
                            <div className="col-md-6">
                                <img src={value.gambar} alt="gambar" className='hasil img-thumbnail'/>
                            </div>
                            <div className="col-md-6">
                                <div className="card hasil gambar">
                                    <div className="card-header hasil">
                                        <p><b>{value.jawaban[jawaban[idx]].teks}</b></p>
                                    </div>
                                    <div className="card-body hasil">
                                        <p>{value.jawaban[jawaban[idx]].arti}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div> 

        || 
        <div className='quiz row'>
            <div className="col-md-6">
                <img src={`../..${dataSoal?.data[nomor]?.gambar}`} alt="soal-gambar" className='soal img-thumbnail'/>
            </div>
            <div className="col-md-6">
                <div className="card mb-3 position-relative quiz-box">
                    <div className="card-header">{dataSoal?.data[nomor]?.soal}</div>
                    <div className="card-body">
                        {dataSoal?.data[nomor]?.jawaban?.map((jawab, index) => {
                        return (
                            <div className="form-check mb-3" key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name={`soal`}
                                id={`${index}jawaban${index + 1}`}
                                // value={jawab.arti}
                                onClick={() => changeSoal(index)}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={`${index}jawaban${index + 1}`}
                            >
                                {jawab.teks}
                            </label>
                            </div>
                        );
                        })}
                    </div>
                </div>
            </div>
            <img src={wave_rule} alt="wave_rule" className='wave'/>
        </div>
        }
        </div>
    );
};