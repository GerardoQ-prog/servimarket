import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import BusinessScreen from '../screens/cliente/BusinessScreen';
import HomeScreen from '../screens/cliente/HomeScreen';



const ClientRoute = () => {

    return (
        <>

            <nav> nav </nav>

            <Switch>

                <Route exact path='/welcome' component={ HomeScreen  } />
                <Route exact path='/business' component={ BusinessScreen } />

                <Redirect to='/welcome' />

            </Switch>

            <footer> footer </footer>

        </>
    )
}

export default ClientRoute
