import React from 'react'
import mensual from '../../assets/img/mensual.png'
import './mensual.css'
const Mensual = () => {
    return (
        <div className="container-fluid">
        <div className="mt-4 d-flex justify-content-around mensual">
              <img src={mensual} className="mensualimg"></img>  
              <img src={mensual} className="mensualimg"></img>  
              <img src={mensual} className="mensualimg"></img>  
        </div>
        </div>
    )
}

export default Mensual
