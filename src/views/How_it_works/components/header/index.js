import React from 'react';

import './index.css'

export default function Header(props){
    
    return(
        <div className="header-container-hiw">
            <div className="header-text">{props.name}</div>
        </div>
    );

}