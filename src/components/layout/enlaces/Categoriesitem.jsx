import React from 'react'

const Categoriesitem = () => {
    return (
        <>  
            <h4> Categories </h4>
            <ul>
                <li> <span> <i className="fas fa-leaf"></i> </span> Frutas y Alimentos </li>
                <li> <span> <i className="fas fa-leaf"></i> </span> Ropa y Accesorios </li>
            </ul>     

            <div className="dropdown c-select">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categories
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#"> Frutas y Alimentos </a>
                  <a className="dropdown-item" href="#"> Ropa y Accesorios </a>
                </div>
            </div>       
        </>
    )
}

export default Categoriesitem
