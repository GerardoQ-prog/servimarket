import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClientRoute from './ClientRoute';

const AppRouter = () => {

    return (

        <Router>
            <Switch>
                <Route path='/' component={ ClientRoute } />
                {/* <Route exact path='/login' /> */}
            </Switch>
        </Router>

    )
}

export default AppRouter
