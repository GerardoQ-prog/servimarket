import React from 'react'
import electricista from '../../assets/img/electricista.png'

const Carousel = () => {
return (
        <div id="carouselExampleIndicators" className="carousel slide mt-3" data-ride="carousel" >
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={electricista} class="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={electricista} class="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={electricista} class="d-block w-100" alt="..."></img>
                </div>
            </div>

        </div>
        )
        }

        export default Carousel