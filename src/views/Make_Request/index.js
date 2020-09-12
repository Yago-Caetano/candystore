import React from 'react';

import Header from './components/header';

import emailjs from 'emailjs-com';

import './index.css'

 
 var service_id = "default_service";
 var template_id = "template_wn9hnCoL";

class Request extends React.Component{

    state = {
         template_params:{
            reply_to: "",
            from_name: "",
            to_name: "Choconat",
            message_html: ""
         },
         nome:"",
         telefone:"",
         email:"",
         msg:""
    }


    componentDidUpdate(prevProps,prevState){
        if(prevState.template_params.message_html !== this.state.template_params.message_html)
        {
            emailjs.send("default_service","template_wn9hnCoL",this.state.template_params,"user_pQaFTctcb9qOYZl7HByPP")
            .then(()=>{
                alert("Enviado com sucesso!");
            }).catch((err) =>{
                alert("Falha ao enviar a solicitação");
            });
            }
      }

    sendEmail = (params) =>{

        params.preventDefault();

        if(!this.state.email)
        {
            alert("Insira um endereço de e-mail válido");
            return;
        }
        if(!this.state.nome)
        {
            alert("Insira o nome");
            return;
        }


        //monta a msg
        const msgBuffer = ` Dados do Cliente: \r\n Nome: ${this.state.nome}\r\n
        Email:${this.state.email}\r\n
        Telefone: ${this.state.telefone}\r\n
        Mensagem:${this.state.msg}\r\n
        `;

        

        this.setState(prevState => ({
                template_params:{
                    ...prevState.template_params,
                    message_html:msgBuffer
                }
        }));

        //console.log(this.state.template_params.message_html);
        
    }

    alteraNome = (params)=>{
        this.setState({nome:params.target.value})
    }

    alteraTelefone = (params) =>{
        this.setState({telefone:params.target.value});
    }

    alteraEmail = (params)=>{
        this.setState({email:params.target.value});
    }

    alteraMsg = (params) => {
        this.setState({msg:params.target.value});
    }

    render(){

        return(
            <div className="make-request-base" id="request">
              <header><Header name="Encomende aqui"></Header></header>
                <div className="main-container-request">
                    <div className="form-container">
                        <form>
                           <ul className="form-list">
                               <li>
                                    <input type="text" placeholder="Nome" onChange={this.alteraNome}></input>
                               </li>
                               <li>
                                    <input type="tel" placeholder="Telefone" onChange={this.alteraTelefone}></input>
                               </li>
                               <li>
                                    <input type="email" placeholder="E-mail" onChange={this.alteraEmail}></input>
                               </li>
    
                                <li>
                                    <textarea rows="6" placeholder="Mensagem" onChange={this.alteraMsg}></textarea>
                                </li>
    
                               <li>
                                    <input className="btn-submit" type="submit" value="Enviar" onClick={this.sendEmail}/>
                               </li>
                            </ul> 
                            
                        </form>
                    </div>
                </div>
            </div>
        )

    }
    
}

export default Request;