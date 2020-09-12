import React from 'react';

import tree from './../../../../assets/specials/arvore.svg';
import easter from './../../../../assets/specials/easter.svg';
import father from './../../../../assets/specials/father.svg';
import mother from './../../../../assets/specials/mother.svg';
import valentine from './../../../../assets/specials/valentine.svg';
import woman from './../../../../assets/specials/woman.svg';




import './index.css';

export default function SpecialCard(props){

    var currentDate = new Date(Date.now());

    function getIcon(){        
        if((currentDate.getMonth() >= 0) && (currentDate.getMonth() <= 2))
        {
            return woman;
        }
        else if((currentDate.getMonth() > 2) && (currentDate.getMonth() <= 3))
        {
            return easter;
        }
        else if(currentDate.getMonth()===4)
        {
            return mother;
        }
        else if(currentDate.getMonth() <= 5)
        {
            return valentine;
        }
        else if(currentDate.getMonth() <= 7)
        {
            return father;
        }
        else{
            return tree;
        }
    }

    return(
        <div className="container-special">
            <div className="container-content2">
                <img className="img2" src={getIcon()}></img>
                <div className="text-special"> 
                Especiais
                </div>

            </div>
        </div>
    )
}