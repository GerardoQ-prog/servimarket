import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <img src={logo} className=""></img>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search"></input>
                </form>
                <div class="navbar-nav">

                    <NavLink class="nav-link selectec" to="/" activeClassName="selectec">Inicio <span class="sr-only">(current)</span></NavLink>
                    <NavLink class="nav-link" to="/" >Productos</NavLink>
                    <NavLink class="nav-link" to="/" >Servicios</NavLink>
                    <NavLink class="nav-link" to="/" >Ofertas de Empleo</NavLink>
                    <NavLink class="iniciarsesion" to="/" >Iniciar Sesión</NavLink>
                </div>
            </div>
        </nav>
        <div className="menu">
            <div className=" menu__text">
               <NavLink to="/" className="menu__text ">Servicio al Cliente</NavLink> 
            </div>
            <div className=" menu__text">
               <NavLink to="/" className="menu__text ">Publica tus Servicios</NavLink> 
            </div>
            <div className=" menu__text">
               <NavLink to="/" className="menu__text ">Vende con Nosotros</NavLink> 
            </div>
        </div>
        </header>
)
}

export default Navbar