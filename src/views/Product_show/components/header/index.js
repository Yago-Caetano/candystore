import React from 'react';

export default function Header(props){
    
    return(
        <div className="header-container">
            <div className="header-text">{props.name}</div>
        </div>
    );

}