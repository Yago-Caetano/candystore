import React from 'react';

import icon from './../../../../assets/candy_icon.svg';

import './index.css';

export default function CandiesCard(props){

    return(
        <div className="container-candie">
            <div className="container-content1">
            <img className="img1" src={icon}></img>
            <div className="text-candie">Doces</div>
            </div>
         
        </div>
    )
}