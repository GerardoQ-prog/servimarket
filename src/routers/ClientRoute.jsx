import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

import BusinessScreen from '../screens/cliente/BusinessScreen';
import HomeScreen from '../screens/cliente/HomeScreen';
import ProductScreen from '../screens/cliente/ProductScreen';



const ClientRoute = () => {

    return (
        <>


            <Navbar></Navbar>


            
            <div>


                <Switch>

                    <Route exact path='/welcome' component={ HomeScreen  } />
                    <Route exact path='/business' component={ BusinessScreen } />
                    <Route exact path='/products' component={ ProductScreen } />

                    <Redirect to='/welcome' />

                </Switch>

            </div>

            <Footer></Footer>

        </>
    )
}

export default ClientRoute
