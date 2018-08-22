import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import App from '../components/Home/Home';

const Routes = () => (
    <Router>
        <div className="app">
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </div>
    </Router>
);

export default Routes;
