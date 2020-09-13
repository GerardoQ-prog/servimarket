import React from 'react';
import BusinessCardItem from './BusinessCardItem';

const BusinessCard = ( props ) => {
    
    return (

        <div 
            className="card ml-3 mt-3" 
            style={{width: "12rem"}}
        >

            <BusinessCardItem  { ...props } />

        </div>
    )
}





export default BusinessCard
