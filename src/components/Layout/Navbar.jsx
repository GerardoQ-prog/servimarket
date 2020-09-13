import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <img src={logo} alt="logo"></img>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search"></input>
                </form>
                <div className="navbar-nav">

                    <NavLink className="nav-link selectec" to="/" activeClassName="selectec">Inicio <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-link" to="/" >Productos</NavLink>
                    <NavLink className="nav-link" to="/" >Servicios</NavLink>
                    <NavLink className="nav-link" to="/" >Ofertas de Empleo</NavLink>
                    <NavLink className="iniciarsesion" to="/" >Iniciar Sesión</NavLink>
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