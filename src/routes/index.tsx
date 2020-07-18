import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from '../pages/home';

const AppRouter = (): React.ReactElement => {
    return (
        <Router>
            <Switch>

                <Route exact path='/'>
                    <Home />
                </Route>

            </Switch>
        </Router>
    );
}

export default AppRouter;