import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import BusinessScreen from '../screens/cliente/BusinessScreen';
import HomeScreen from '../screens/cliente/HomeScreen';
import ProductScreen from '../screens/cliente/ProductScreen';



const ClientRoute = () => {

    return (
        <>

            <nav >
                navbar
            </nav>
            
            <div>

                <Switch>

                    <Route exact path='/welcome' component={ HomeScreen  } />
                    <Route exact path='/business' component={ BusinessScreen } />
                    <Route exact path='/products' component={ ProductScreen } />

                    <Redirect to='/welcome' />

                </Switch>

            </div>

            <footer> footer </footer>

        </>
    )
}

export default ClientRoute
