import React from 'react';
// import { Link } from 'react-router-dom';
import '/public/css/hero.css';

export const Button = (button) => {
    return(
        <button className="btn btn-main" type={button.type}>
            {button.text}
        </button>
    );
}; 