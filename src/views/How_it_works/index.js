import React from 'react';

import './index.css';
import imgEncomenda from '../../assets/encomenda.svg';
import imgEnvio from '../../assets/entrega.svg'
import Header from './components/header';

class HitWorks extends React.Component{



    render(){
        return(
            <>
                <header><Header name="Como funciona?"></Header></header>
                <div className={this.props.nomeClass}>
                    <div className="order-container">
                        <div className="text-hiw">
                            <div className="title-hiw">
                                Encomenda
                            </div>
                            <ul>
                                <li>A encomenda pode ser realizada por meio de nossos canais digitais,
                                     ou clicando <a href="#request">aqui</a>;</li>
                                <li>Para efetivar o pedido é necessário adiantar 50% do valor do pedido, como forma de garantia;</li>
                                <li>Cancelamentos com até 3 dias de antecedência recebem reembolso integral.  </li>
                            </ul>
                        </div>
                        <div className="img-hiw">
                            <img src={imgEncomenda} alt="Encomenda"></img>
                        </div>
                    </div>
    
                    <div className="shipment-container">
                    <div className="img-hiw">
                            <img src={imgEnvio} alt="Envio"></img>
                        </div>
                    <div className="text-hiw">
                            <div className="title-hiw">
                                Entrega
                            </div>
                            <ul>
                                <li>O valor restante do pedido será recebido no ato da entrega;</li>
                                <li>É possivel retirada;</li> 
                                <li>Realizamos entrega agendada 
                                    (mediante taxa de entrega)</li> 
                            </ul>
                        </div>
                    </div>
                
                </div>
            </>
        );
    }
   
}

export default HitWorks;