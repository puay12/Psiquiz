import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { constSelector, useRecoilState } from "recoil";
import { TesTeksCollection } from "/imports/api/tes_teks.js";
import { counterIndex } from "/imports/ui/store/index";
import Skeleton from "react-loading-skeleton";
// import { useNavigate } from "react-router-dom";
import "/public/css/soal.css";
import { useState } from "react";

export const SoalTeks = () => {
  const wave_rule = '/img/wave_rule.png';
  const [isEnding, setEnding] = useState(false);
  const [dataSoal, setdataSoal] = useRecoilState(counterIndex);

  const soal = useTracker(() => TesTeksCollection.find().fetch());

  const soalCount = useTracker(() => TesTeksCollection.find().count());

  React.useEffect(() => {
    setdataSoal({ ...dataSoal, totalSoal: soalCount, data: soal });
  }, [soalCount]);

  const [nomor, setNomor] = useState(0); 
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

  const [jawaban, setJawaban] = useState([]);

  return (
    <div className="container soal-box">
    {isEnding &&  
      <div className='hasil-box'>
        <h1 className='hasil'>Hasil Tesmu</h1>
        {dataSoal?.data?.map((value, idx) => {
        // console.log(value.jawaban[jawaban[idx]]);
        return (
          <div className="card hasil" key={value._id}>
            <div className="card-header">{value.soal}</div>
            <div className="card-body">
              <p><b>{value.jawaban[jawaban[idx]].teks}</b></p>
              <p>{value.jawaban[jawaban[idx]].arti}</p>
            </div>
          </div>
        );
      })}
      </div> 

      || 
      <div className='quiz'>
        <div className="card mb-3">
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
        <img src={wave_rule} alt="wave_rule" className='wave'/>
      </div>
    }
    </div>
  );
};
