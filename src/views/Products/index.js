import React from 'react';

import Header from './components/header';
import './index.css';
import SpecialCard from './components/SpecialCard';
import CandiesCard from './components/CandiesCard';
import BasketCard from './components/BasketCard';
import {Link} from 'react-scroll';

class Products extends React.Component{

    

render(){
    return(
        <>
        <header><Header></Header></header>
            <div className="main-container-products">

            <div className="card-container">
                <div className={this.props.nomeClass}>
                <Link     
                                activeClass="active"
                                to="especiais"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {500}> 
                    <SpecialCard></SpecialCard> 
                </Link>

            </div>
            <div className={this.props.nomeClass}>
                <Link     
                                activeClass="active"
                                to="doces"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {500}> 

                    <CandiesCard></CandiesCard>

                </Link>
            </div>
            <div className={this.props.nomeClass}>
            <Link     
                                activeClass="active"
                                to="cestas"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {500}> 
                <BasketCard></BasketCard>
                </Link>

            </div>
        </div>
        </div>
        </>
    );
    }
   
}

export default Products;