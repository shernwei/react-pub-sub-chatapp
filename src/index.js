import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from '../src/views/Homepage';
import history from './helpers/history';

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path = '/' component={HomePage}/>
        </Switch>
    </Router>, document.getElementById('root')
)