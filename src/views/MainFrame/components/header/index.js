import React from 'react';

import FcbLogo from '../../../../assets/logoFcb.svg';
import Wpplogo from '../../../../assets/logoWpp.svg';
import Instlogo from '../../../../assets/logoInsta.svg';

import './index.css';

export default function Header(){

    return(
        <header className="header-main">
                    <div className="topnav">
                        <a className="icones fade-in" href="https://wa.me/message/M55QAXVTXTAYA1" target="_blank"><img src={Wpplogo}></img></a>
                        <a className="icones fade-in" href="https://instagram.com/_doceschoconat?igshid=5ws02lvdjnkq" target="_blank"><img src={Instlogo}></img></a>
                        <a className="icones fade-in" href="https://www.facebook.com/doceschoconat20" target="_blank"><img src={FcbLogo}></img></a>
                    </div>

        </header>
    );

}