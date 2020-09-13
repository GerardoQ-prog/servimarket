import React  from 'react';


import './css/business.css';
import { businessApi } from '../../api/business';
import BusinessCard from '../../components/layout/cards/BusinessCard';
import Categoriesitem from '../../components/layout/enlaces/Categoriesitem';
import Col2 from '../../components/layout/grid/Col2';

const BusinessScreen = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <Col2>
                        <div className="c-categories">
                            <Categoriesitem />
                        </div>                
                    </Col2>
                    <div className="col-md-10 ">

                        <h1 style={{ fontSize: '2rem' }} >Tiendas</h1>
                        <hr/>

                        <div className="c-flex">
                            {
                                businessApi.map((item, index) => 
                                    businessApi.length > 0 
                                    ?   <BusinessCard key={ index } { ...item } /> 
                                    : <div> no hay data </div> 
                                )
                            }                                
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
    
}

export default BusinessScreen
