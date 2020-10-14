import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import insurance from './InsuranceType';
import PropertyType from './PropertyType';
import Protection from './ProtectionSystem';
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    
                    <Route path="/InsuranceType" component={insurance} />
                    <Route path="/PropertyType" Component={PropertyType}/>
                    <Route path="/ProtectionSystem" Component={Protection}/>
                </Switch>
            </Router>
        )
    }
}
