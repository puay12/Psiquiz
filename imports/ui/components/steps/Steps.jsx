import React from 'react';
import '/public/css/howto.css';

export const Steps = (step) => {
    const ball ='/img/ball.png';
    return(
        <div className='step'>
            <img src={ball} alt="ball" className="ball"/>
            <p className="cara"> {step.text} </p>
        </div>
    );
};