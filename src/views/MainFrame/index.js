import React from 'react';

import './index.css';

import Logo from '../../assets/mainLogo.svg';
import Header from './components/header/index.js';

class MainFrame extends React.Component {

    render(){
        return(
            <div>
                <header>
                    <Header></Header>
                </header>
                <div className="base-container">
                    <div className="main-container">
                        <img className="fade-in" alt="LOGO" src={Logo}></img>
                        <div className="main-text fade-in"> ALGUMA FRASE LEGAL</div>
                    </div>


                </div>
            </div>
        );
    }
    
};

export default MainFrame;