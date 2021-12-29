import React from 'react';
import '/public/css/rules.css';

export const IsiRule = (rule) => {
    return(
        <ul>
            <li>
                {rule.text}
            </li>
        </ul>
    );
};