import React from 'react';

import './index.css';

import Header from './components/header/index.js';
import Slider from './components/slider';


export default function ProductShow(props){
    return(
        <div className={props.backWhite ? "main-productS-container white" : "main-productS-container green"} id={props.id}>
            <header><Header className="header-productS" name={props.name}></Header></header>
            <div className="main-container-productS">
                <Slider></Slider>
            </div>
        </div>
    );
}