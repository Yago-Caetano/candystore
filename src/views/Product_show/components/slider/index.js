import React, { Component } from "react";
import Slider from "react-slick";
import Path from "path";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css'

import imgBarraRed from '../../../../uploads/barra_red.jpeg'
import imgBarraWhite from '../../../../uploads/barra_white.jpeg'
import imgBombons from '../../../../uploads/bombons.jpg'
import imgRecheado from '../../../../uploads/coracao-recheado.jpg'
import imgLapidado from '../../../../uploads/lapidado.jpg'
import torta from '../../../../uploads/torta.jpg'



export default class SimpleSlider extends Component {



  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 2,
      autoplay:true,
      fade:true,
    };

    const exampleFotos = [
        {
            url: imgBarraRed
        },
        {
            url: imgBarraWhite
        },
        {
            url:imgBombons
        },
        {
            url:imgRecheado
        },
        {
            url:imgLapidado
        },
    
]

    console.log(__dirname)
    console.log(Path.resolve(__dirname, '..','..','..','uploads','barra_red.jpeg'))

    return (
      <div className="mslider-container">
        <Slider {...settings}>
            {
                exampleFotos.map(photo=>{
                    return(
                        <div>
                            <img src={photo.url} alt="doce" className="mslider-item"></img>
                        </div>
                    )
                })
            }
        </Slider>
      </div>
    );
  }
}