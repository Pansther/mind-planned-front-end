import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Navbar from '../components/navbar';
import SubNavbar from '../components/subNavbar';

import './style.css';

import Home from '../pages/home';

const AppRouter = (): React.ReactElement => {
    return (
        <Router>
            <Switch>

                <Route exact path='/'>
                    <Navbar />
                    <SubNavbar />
                    <Home />
                </Route>

            </Switch>
        </Router>
    );
}

export default AppRouter;