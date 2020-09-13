import React from 'react'
import Carousel from './Carousel'
import './heroe.css'
import Mensual from './Mensual'
const Heroe = () => {
    return (
        <div className="container-fluid">
        <div className="row heroe">
            <div className="col-lg-5 col-md-12 col-sm-12 bienvenida">
                <h1>Bienvenidos a <br/>Servi<span>Market</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus fuga at corrupti doloremque eum voluptatum, dolorem amet. Amet doloribus numquam, culpa cupiditate iste provident, qui veritatis dolore temporibus eaque expedita?</p>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 ">
                <Carousel></Carousel>
                <Mensual></Mensual>
            </div>
        </div>
        </div>
        
    )
}

export default Heroe
