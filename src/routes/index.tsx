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
                    <NavPackage />
                    <Home />
                </Route>

                <Route path='/store/'>
                    <NavPackage /> 
                </Route>

                <Route path='/template/'>
                    <NavPackage /> 
                </Route>

                <Route path='/my-plan/'>
                    <NavPackage /> 
                </Route>

            </Switch>
        </Router>
    );
}

const NavPackage = (): React.ReactElement => { 
    return (
        <div className='navbar-package' style={{ position: 'sticky', top: '0', zIndex: 99 }}>
            <Navbar />
            <SubNavbar />
        </div>
    );
}

export default AppRouter;