import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Login, Register } from '../Views';

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/" exact render={() => <Login />} />
                    <Route path="/registration" render={() => <Register />} />
                </Switch>
            </div>
        )
    }
}
export default Routes