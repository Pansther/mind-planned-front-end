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

            <Navbar />
            <SubNavbar />

            <Switch>

                <Route exact path='/'> 
                    <Home />
                </Route>

                <Route path='/store/'> 
                </Route>

                <Route path='/template/'> 
                </Route>

                <Route path='/my-plan/'> 
                </Route>

            </Switch>
        </Router>
    );
}
 
export default AppRouter;