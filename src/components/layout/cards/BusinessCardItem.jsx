import React from 'react'
import PropTypes from 'prop-types';

const BusinessCardItem = ({ img, name, description }) => {
    return (
        <div className="card-body"  >

            <img src={ img } alt="logo-tienda"/>

            <article>
                <h4> { name } </h4>
                <span> { description } </span>
                <p>Estrellitas Aqui raa</p>
            </article>

        </div>
    )
}


BusinessCardItem.prototype = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}


export default BusinessCardItem
