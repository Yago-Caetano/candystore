import React, { useEffect, useState } from 'react';
import {useScrollPosition} from '@n8tb1t/use-scroll-position'
import './App.css';

import MainFrame from './views/MainFrame';
import Products from './views/Products';
import Product_Show from './views/Product_show'; 
import HowItWorks from './views/How_it_works';
import Request from './views/Make_Request';


const init_states = {
  ProductClassName: "card-item hidden",
  HitClassNames: "main-container-hiw",
  MakeReqClassNames:"form-container",
  HowItWorks:"main-container-hiw"
}


function App() {

 
  const [classNames,setclassNames] = useState({});
  const [visiblePages,setVisiblePages] = useState({
      main:false,
      hiw:false
  })
  
  useScrollPosition(({ prevPos, currPos }) => {

      if(currPos.y < prevPos.y)
      {
          if((currPos.y < -400) && (!visiblePages.main))
          {
             setclassNames( prevState => ({
                  ...prevState.HitClassNames,
                  ...prevState.MakeReqClassNames,
                  ...prevState.HowItWorks,
                  ProductClassName:"card-item fade-in"
              }));

              setVisiblePages(prevState =>({
                ...prevState,
                main:true
              }))
          }

         /* if((currPos.y < -3700) && (!visiblePages.hiw))
          {
            setclassNames( prevState => ({
              ...prevState.HitClassNames,
              ...prevState.MakeReqClassNames,
              ...prevState.ProductClassName,
              HowItWorks:"main-container-hiw fade-in"
          }));

          setVisiblePages(prevState =>({
              ...prevState,
              hiw:true
          }))
          }*/

      }
      console.log(currPos.x)
      console.log(currPos.y)
    
    })
  

   //ao carregar a tela
   useEffect(() => {
     setclassNames(init_states)

   },[])

   
  /* //ao alterar o scrool da tela
  useEffect({
    handleScroll
  },window.onscroll);
*/

  return (
    <div className="App">
      <MainFrame></MainFrame>
      <Products nomeClass={classNames.ProductClassName}></Products>
      <Product_Show id="doces" name="Doces" backWhite={false} ></Product_Show>
      <Product_Show id="cestas" name="Cestas" backWhite={true} ></Product_Show>
      <Product_Show id="especiais" name="Especiais" backWhite={false} ></Product_Show>
      <HowItWorks nomeClass={classNames.HowItWorks}></HowItWorks>
      <Request></Request> 
    </div>
  );
}

export default App;
