import React from 'react';

import './css/product.css'
import Col2 from '../../components/layout/grid/Col2';

const ProductScreen = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <Col2>
                        <div className="c-categories c-products">
                            <div className="card" style={{width: '11rem' }}>
                                <img 
                                    src="https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg" 
                                    className="card-img-top" 
                                    alt="..." 
                                />
                                <div className="card-body c-card-body ">
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>                
                    </Col2>

                    <div className="col-md-10 ">

                        <h1 style={{ fontSize: '2rem' }} > Productos </h1>
                        <hr/>

                        <div className="c-flex">
                            
                            {/* {
                                businessApi.map((item, index) => 
                                    businessApi.length > 0 
                                    ?   <BusinessCard key={ index } { ...item } /> 
                                    : <div> no hay data </div> 
                                )
                            }                                 */}
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductScreen
