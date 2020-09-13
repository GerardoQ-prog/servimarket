import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';

import BusinessScreen from '../screens/cliente/BusinessScreen';
import HomeScreen from '../screens/cliente/HomeScreen';



const ClientRoute = () => {

    return (
        <>

            <Navbar></Navbar>

            <Switch>

                <Route exact path='/welcome' component={ HomeScreen  } />
                <Route exact path='/business' component={ BusinessScreen } />

                <Redirect to='/welcome' />

            </Switch>

            <Footer></Footer>

        </>
    )
}

export default ClientRoute
