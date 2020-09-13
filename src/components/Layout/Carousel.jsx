import React from 'react'
import electricista from '../../assets/img/electricista.png'
import './Carousel.css'
const Carousel = () => {
return (
        <div id="carouselExampleIndicators" class="carousel slide mt-3" data-ride="carousel" >
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={electricista} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src={electricista} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src={electricista} class="d-block w-100" alt="..."></img>
                </div>
            </div>

        </div>
        )
        }

        export default Carousel