import React from 'react';

import icon from './../../../../assets/basket.svg';

import './index.css';

export default function CandiesCard(props){

    return(
        <div className="container-basket">
            <div className="container-content">
                <img className="img1"src={icon}></img>
                <div className="text-basket">Cestas</div>
           
                
            </div>
        </div>
    )
}